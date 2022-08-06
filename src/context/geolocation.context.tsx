import { ReactNode, createContext, useState, useEffect } from 'react'

interface PropTypes {
	children: ReactNode,
}

const Context = createContext<boolean>(false)

function Provider({ children }: PropTypes) {

	const [permissionGranted, setPermissionGranted] = useState<boolean>(false)

	useEffect(() => {

		;(async () => {

			const status: PermissionStatus = await navigator.permissions.query({
				name: 'geolocation',
			})

			setPermissionGranted(status.state === 'granted')

			status.onchange = (e: Event) => {

				if (e.target && e.target instanceof PermissionStatus) {

					setPermissionGranted(e.target.state === 'granted')
				}
			}
		})()

	}, [])

	return (
		<Context.Provider value={permissionGranted}>
			{children}
		</Context.Provider>
	)
}

export {
	Context,
	Provider,
}
