import type { DockItem } from '~/types'

const BASE_ICON_PATH = '/images/dock'
const BASE_DOCK_ITEMS: DockItem[] = [
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/finder.png`, label: 'Finder' },
	{ type: 'separator' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/finder.png`, label: 'Finder' },
]

export const useDockStore = defineStore('dock', () => {
	const items = ref(structuredClone(BASE_DOCK_ITEMS))

	return {
		items,
	}
})

import.meta.hot?.accept(acceptHMRUpdate(useDockStore, import.meta.hot))
