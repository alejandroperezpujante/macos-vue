import type { DockItem } from '~/types'

const DOCK_ICON_PATH = '/images/dock'

const BASE_DOCK_ITEMS: DockItem[] = [
	{ type: 'app', icon: `${DOCK_ICON_PATH}/finder`, label: 'Finder' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/launchpad`, label: 'Launchpad' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/safari`, label: 'Safari' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/messages`, label: 'Messages' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/mail`, label: 'Mail' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/maps`, label: 'Maps' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/photos`, label: 'Photos' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/facetime`, label: 'FaceTime' },
	// { type: 'app', icon: `${DOCK_ICON_PATH}/calendar`, label: 'Calendar' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/contacts`, label: 'Contacts' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/reminders`, label: 'Reminders' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/notes`, label: 'Notes' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/music`, label: 'Music' },
	// { type: 'app', icon: `${DOCK_ICON_PATH}/keynote`, label: 'Keynote' },
	// { type: 'app', icon: `${DOCK_ICON_PATH}/numbers`, label: 'Numbers' },
	// { type: 'app', icon: `${DOCK_ICON_PATH}/pages`, label: 'Pages' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/app_store`, label: 'App Store' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/system_preferences`, label: 'System Preferences' },
	{ type: 'separator' },
	{ type: 'app', icon: `${DOCK_ICON_PATH}/trash`, label: 'Trash' },
]

export default function () {
	const items = useState<DockItem[]>('dock-items', () => BASE_DOCK_ITEMS)

	return {
		items,
	}
}
