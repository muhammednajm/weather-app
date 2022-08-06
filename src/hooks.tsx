import { useContext } from 'react'
import { Context as NetworkContext } from './context/network.context'
import { Context as GeolocationContext } from './context/geolocation.context'

function useNetwork() {
	const ctx = useContext<boolean>(NetworkContext)
	return ctx
}

function useGeolocation() {
	const ctx = useContext<boolean>(GeolocationContext)
	return ctx
}

export {
	useNetwork,
	useGeolocation,
}
