import styles from './weather.module.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useWeatherService } from '../hooks'
import { getNearerTime } from '../utils'

function Weatherpage() {

	const navigate = useNavigate()

	const { date: isOutlet } = useParams()

	const { loading, data, error } = useWeatherService()

	if (loading || error || !data) {
		return <></>
	}

	return (
		<div className={styles.page}>
			<ul className={styles.dates}>
				{
					Object.keys(data).map(date => {

						const nearerTime = getNearerTime(data[date].hourly)

						return (
							<li key={date}>
								<button
									title={nearerTime.desc}
									className={isOutlet === date ? styles.active : undefined}
									onClick={() => navigate('/' + date)}
								>
									<div>
										<span className={styles.date}>{date}</span>
									</div>
									<div className={styles.icon}>
										<img src={`https://openweathermap.org/img/w/${nearerTime.icon}.png`} alt={nearerTime.desc} />
									</div>
									<div className={styles.temperatures}>
										<span className={styles.highTemp}>{data[date].max}°</span>
										<span className={styles.lowTemp}>{data[date].min}°</span>
									</div>
								</button>
							</li>
						)
					})
				}
			</ul>

			{isOutlet && <Outlet />}
			{!isOutlet && (
				<div className={styles.noSelect}>
					<div>
						<p>⬆ Please, select a date above to see hourly weather forecast.</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Weatherpage
