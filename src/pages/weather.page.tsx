import { Outlet, useNavigate } from 'react-router-dom'

function Weatherpage() {

	const navigate = useNavigate()

	return (
		<>
			<ul>
				<li>
					<button
						onClick={() => navigate('/2022-08-06')}
					>
						<span>2022-08-06</span>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-07')}
					>
						<span>2022-08-07</span>
					</button>
				</li>
				<li>
					<button
						onClick={() => navigate('/2022-08-08')}
					>
						<span>2022-08-08</span>
					</button>
				</li>
			</ul>

			<Outlet/>
		</>
	)
}

export default Weatherpage
