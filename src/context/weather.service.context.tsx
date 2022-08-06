import { ReactNode, createContext, useState, useCallback, useEffect } from 'react'
import { useNetwork, useGeolocation } from '../hooks'

interface PropTypes {
	children: ReactNode,
	appID: string,
}

const Context = createContext<any>(null)

function Provider({ children, appID }: PropTypes) {

	const [city, setCity] = useState<any>(null)
	const [weatherData, setWeatherData] = useState<any>(null)

	const isOnline = useNetwork()
	const isGeolocationGranted = useGeolocation()

	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<null|string>(null)

	const fetchAPI = useCallback(() => {

		window.navigator.geolocation.getCurrentPosition(async ({ coords }: GeolocationPosition) => {

			try {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lon=${coords.longitude}&lat=${coords.latitude}&cnt=56&units=metric&appid=${appID}`)
				
				if (response.status >= 200 && response.status <= 299) {

					const json = await response.json()

					setCity({
						name: json.city.name,
						countryCode: json.city.country
					})

					const data: { [name: string]: any } = {}

					for (const info of json.list) {

						const [date, time] = info.dt_txt.split(' ')

						if (!data[date]) {

							data[date] = {
								min: Infinity,
								max: -Infinity,
								hourly: {},
							}
						}

						const temp = Math.floor(info.main.feels_like)

						data[date].hourly[time] = {
							temp,
							icon: info.weather[0].icon,
							desc: info.weather[0].description,
						}

						if (data[date].min > temp) {
							data[date].min = temp
						}

						if (data[date].max < temp) {
							data[date].max = temp
						}
					}
					setWeatherData(data)
					setLoading(false)
				}
				else {
					throw new Error(response.statusText || String(response.status))
				}

			} catch(err: any) {
				setError(err.message)
				setLoading(false)
			}
		})

	}, [])

	useEffect(() => {

		if (isOnline) {

			fetchAPI()
		}
		else {
			setLoading(false)
			setError(null)
			setWeatherData(null)
		}
	}, [
		isOnline,
	])

	useEffect(() => {

		if (isGeolocationGranted) {
			fetchAPI()
		}
		else {
			setLoading(false)
			setError(null)
			setWeatherData(null)
		}
	}, [
		isGeolocationGranted,
	])

	return (
		<Context.Provider value={{ city, weatherData, loading, error, }}>
			{children}
		</Context.Provider>
	)
}

export {
	Context,
	Provider,
}
