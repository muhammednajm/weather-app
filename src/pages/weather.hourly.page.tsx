import styles from './weather.hourly.module.css'
import { useParams } from 'react-router-dom'
import { useWeatherService } from '../hooks'

function WeatherHourlypage() {

	const { date } = useParams()

	const { loading, data, error } = useWeatherService()

	if (loading || error || !data) {
		return <></>
	}

	return (
		<div className={styles.page}>
			{
				data && date && (date in data) && (
					<ul className={styles.list}>
						{
							Object.keys(data[date].hourly).map(time => {

								const info = data[date].hourly[time]

								return (
									<li
										key={time}
										title={info.desc}
									>
										<span className={styles.time}>⏲ {time.substring(0, 5)}</span>
										<img src={`https://openweathermap.org/img/w/${info.icon}.png`} alt={info.desc} />
										<span className={styles.temp}>{info.temp}°</span>
									</li>
								)
							})
						}
					</ul>
				)
			}
			{
				data && date && !(date in data) && (
					<div className={styles.notFound}>
						<div>
							<p>Not Found</p>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default WeatherHourlypage
