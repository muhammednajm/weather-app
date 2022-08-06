import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider as NetworkProvider } from './context/network.context'
import { Provider as GeolocationProvider } from './context/geolocation.context'
import { Provider as WeatherServiceProvider } from './context/weather.service.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<NetworkProvider>
				<GeolocationProvider>
					<WeatherServiceProvider appID="bd75887c8a602969bfd62fe7821f3472">
						<App />
					</WeatherServiceProvider>
				</GeolocationProvider>
			</NetworkProvider>
		</BrowserRouter>
	</React.StrictMode>
)
