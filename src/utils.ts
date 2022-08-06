/*
	Get nearer time key

	See: https://openweathermap.org/forecast5#JSON (dt_txt property)

	Hours		Key
	0 1 2		00:00:00
	3 4 5		03:00:00
	6 7 8		06:00:00
	9 10 11		09:00:00
	12 13 14	12:00:00
	15 16 17	15:00:00
	18 19 20	18:00:00
	21 22 23	21:00:00
*/
function getNearerTime(data: { [name: string]: any }): { icon: string, desc: string } {

	const hours = (new Date()).getHours()

	const part = String(Math.floor(hours / 3) * 3).padStart(2, '0') + ':00:00'

	if (data[part]) {
		return data[part]
	}
	else {
		return data[Object.keys(data)[0]]
	}
}

export {
	getNearerTime,
}
