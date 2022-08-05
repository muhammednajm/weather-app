import './App.css'
import { Routes, Route } from 'react-router-dom'

import Weatherpage from './pages/weather.page'
import WeatherHourlypage from './pages/weather.hourly.page'

function App() {

	return (
		<Routes>
			<Route path="/" element={<Weatherpage/>}>
				<Route path=":date" element={<WeatherHourlypage />} />
			</Route>
		</Routes>
	)
}

export default App
