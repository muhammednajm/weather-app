import styles from './weather.hourly.module.css'
import { useParams } from 'react-router-dom'

function WeatherHourlypage() {

	const { date } = useParams()

	return (
		<div className={styles.page}>
			<ul className={styles.list}>
				<li>
					<span className={styles.time}>⏲ 00:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 03:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 06:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 09:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 12:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 15:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 18:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
				<li>
					<span className={styles.time}>⏲ 21:00</span>
					<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
					<span className={styles.temp}>23°</span>
				</li>
			</ul>
		</div>
	)
}

export default WeatherHourlypage
