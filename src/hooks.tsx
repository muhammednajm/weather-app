import { useContext } from 'react'
import { Context as NetworkContext } from './context/network.context'

function useNetwork() {
	const ctx = useContext<boolean>(NetworkContext)
	return ctx
}

export {
	useNetwork,
}
