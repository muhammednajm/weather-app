import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'
import { useNetwork } from '../../hooks'

function Header() {

	const navigate = useNavigate()

	const isOnline = useNetwork()

	return (
		<header className={styles.header}>
			<section className={styles.status}>
				<span>🗺: Tashkent</span>
				<button
					onClick={() => navigate('/')}
				>WeatherApp</button>
				<span className={!isOnline ? styles.noConnection : undefined}>🛰: {isOnline ? 'online' : 'no connection'}</span>
			</section>
			{
				!isOnline && (
					<section className={styles.alert}>
						<span>Satellite communication was not established. Please check your internet connection.</span>
					</section>
				)
			}
		</header>
	)
}

export default Header
