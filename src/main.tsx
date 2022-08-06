import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider as NetworkProvider } from './context/network.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<NetworkProvider>
				<App />
			</NetworkProvider>
		</BrowserRouter>
	</React.StrictMode>
)
