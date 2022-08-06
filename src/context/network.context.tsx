import { ReactNode, createContext, useState, useEffect } from 'react'

interface PropTypes {
	children: ReactNode,
}

const Context = createContext<boolean>(window.navigator.onLine)

function Provider({ children }: PropTypes) {

	const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine)

	useEffect(() => {

		const connectionEstablished = () => setIsOnline(true)
		const connectionLost = () => setIsOnline(false)

		window.addEventListener('online', connectionEstablished)
		window.addEventListener('offline', connectionLost)

		return () => {
			window.removeEventListener('online', connectionEstablished)
			window.removeEventListener('offline', connectionLost)
		}

	}, [])

	return (
		<Context.Provider value={isOnline}>
			{children}
		</Context.Provider>
	)
}

export {
	Context,
	Provider,
}
