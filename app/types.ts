export interface AppDockItem {
	type: 'app'
	iconPath: string
	label: string
}

export interface SeparatorDockItem {
	type: 'separator'
}

export type DockItem = AppDockItem | SeparatorDockItem
