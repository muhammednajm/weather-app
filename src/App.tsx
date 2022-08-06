import './App.css'
import { Routes, Route } from 'react-router-dom'

// Load components
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

// Load pages
import Weatherpage from './pages/weather.page'
import WeatherHourlypage from './pages/weather.hourly.page'

function App() {

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Weatherpage/>}>
						<Route path=":date" element={<WeatherHourlypage />} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
