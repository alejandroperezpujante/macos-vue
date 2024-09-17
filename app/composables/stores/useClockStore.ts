export const useClockStore = defineStore('clock', () => {
	const timestamp = useTimestamp()
	const clock = useDateFormat(timestamp, 'HH:mm')

	return {
		clock,
	}
})

import.meta.hot?.accept(acceptHMRUpdate(useClockStore, import.meta.hot))
