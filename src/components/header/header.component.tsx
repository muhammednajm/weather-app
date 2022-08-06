import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'
import { useNetwork, useGeolocation, useCity, useWeatherService } from '../../hooks'

function Header() {

	const navigate = useNavigate()

	const isOnline = useNetwork()

	const isGeolocationGranted = useGeolocation()

	const city = useCity()

	const { error } = useWeatherService()

	return (
		<header className={styles.header}>
			<section className={styles.status}>
				{
					isOnline && (
						<>
							{city && (
								<div>
									<span>🗺 {city.name} ({city.countryCode})</span>
								</div>
							)}
							{!city && (
								<div>
									{isGeolocationGranted && <span>📡 I'm looking for your coordinates</span>}
									{!isGeolocationGranted && <span>📡 permission denied</span>}
								</div>
							)}
						</>
					)
				}
				{
					!isOnline && (
						<div className={styles.noConnection}>
							<span>📡 no connection</span>
						</div>
					)
				}
				<div>
					<button
						onClick={() => navigate('/')}
					>
						WeatherApp
					</button>
				</div>
				<div>
					<span className={!isOnline ? styles.noConnection : undefined}>🛰: {isOnline ? 'online' : 'no connection'}</span>
				</div>
			</section>
			{
				!isOnline && (
					<section className={styles.alert}>
						<span>Satellite communication was not established. Please check your internet connection.</span>
					</section>
				)
			}
			{
				!isGeolocationGranted && (
					<section className={styles.alert}>
						<span>Please grant to determine your coordinates</span>
					</section>
				)
			}
			{
				error && (
					<section className={styles.alert}>
						<span>{error}</span>
					</section>
				)
			}
		</header>
	)
}

export default Header
