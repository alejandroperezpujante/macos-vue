export default function () {
	const timestamp = useTimestamp()
	const humanClock = useDateFormat(timestamp, 'HH:mm:ss')

	return {
		timestamp,
		humanClock,
	}
}
