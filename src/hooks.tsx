import { useContext } from 'react'
import { Context as NetworkContext } from './context/network.context'
import { Context as GeolocationContext } from './context/geolocation.context'
import { Context as WeatherServiceContext } from './context/weather.service.context'

function useNetwork() {
	const ctx = useContext<boolean>(NetworkContext)
	return ctx
}

function useGeolocation() {
	const ctx = useContext<boolean>(GeolocationContext)
	return ctx
}

function useCity() {
	const ctx = useContext<any>(WeatherServiceContext)
	return ctx.city
}

function useWeatherService() {
	const { loading, weatherData: data, error } = useContext<any>(WeatherServiceContext)
	return {
		loading,
		data,
		error,
	}
}

export {
	useNetwork,
	useGeolocation,
	useCity,
	useWeatherService,
}
