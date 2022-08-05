import { useParams } from 'react-router-dom'

function WeatherHourlypage() {

	const { date } = useParams()

	return (
		<>
			{date}
		</>
	)
}

export default WeatherHourlypage
