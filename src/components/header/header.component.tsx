import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'

function Header() {

	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			<section className={styles.status}>
				<span>🗺: Tashkent</span>
				<button
					onClick={() => navigate('/')}
				>WeatherApp</button>
				<span>🛰: no connection</span>
			</section>
			<section className={styles.alert}>
				<span>Satellite communication was not established. Please check your internet connection.</span>
			</section>
		</header>
	)
}

export default Header
