export interface AppDockItem {
	type: 'app'
	icon: string
	label: string
}

export interface SeparatorDockItem {
	type: 'separator'
}

export type DockItem = AppDockItem | SeparatorDockItem
