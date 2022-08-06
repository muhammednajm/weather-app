import styles from './weather.module.css'

import { Outlet, useNavigate, useParams } from 'react-router-dom'

function Weatherpage() {

	const navigate = useNavigate()

	const { date: isOutlet } = useParams()

	return (
		<div className={styles.page}>
			<ul className={styles.dates}>
				<li>
					<button
						onClick={() => navigate('/2022-08-06')}
						className={isOutlet === '2022-08-06' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-06</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-07')}
						className={isOutlet === '2022-08-07' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-07</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-08')}
						className={isOutlet === '2022-08-08' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-08</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-09')}
						className={isOutlet === '2022-08-09' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-09</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-10')}
						className={isOutlet === '2022-08-10' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-10</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-11')}
						className={isOutlet === '2022-08-11' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-11</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-12')}
						className={isOutlet === '2022-08-12' ? styles.active : undefined}
					>
						<div>
							<span className={styles.date}>2022-08-12</span>
						</div>
						<div className={styles.icon}>
							<img src="https://openweathermap.org/img/w/02n.png" alt="Cloudy" title="Cloudy" />
						</div>
						<div className={styles.temperatures}>
							<span className={styles.highTemp}>45°</span>
							<span className={styles.lowTemp}>27°</span>
						</div>
					</button>
				</li>
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
