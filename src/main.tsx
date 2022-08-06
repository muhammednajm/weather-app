import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider as NetworkProvider } from './context/network.context'
import { Provider as GeolocationProvider } from './context/geolocation.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<NetworkProvider>
				<GeolocationProvider>
					<App />
				</GeolocationProvider>
			</NetworkProvider>
		</BrowserRouter>
	</React.StrictMode>
)
