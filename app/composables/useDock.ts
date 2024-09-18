import type { DockItem } from '~/types'

const BASE_ICON_PATH = '/images/dock'
const BASE_DOCK_ITEMS: DockItem[] = [
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/finder.png`, label: 'Finder' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/launchpad.png`, label: 'Launchpad' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/safari.png`, label: 'Safari' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/messages.png`, label: 'Messages' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/mail.png`, label: 'Mail' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/maps.png`, label: 'Maps' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/photos.png`, label: 'Photos' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/facetime.png`, label: 'FaceTime' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/calendar.png`, label: 'Calendar' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/contacts.png`, label: 'Contacts' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/reminders.png`, label: 'Reminders' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/notes.png`, label: 'Notes' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/music.png`, label: 'Music' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/keynote.png`, label: 'Keynote' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/numbers.png`, label: 'Numbers' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/pages.png`, label: 'Pages' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/app_store.png`, label: 'App Store' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/system_preferences.png`, label: 'System Preferences' },
	{ type: 'separator' },
	{ type: 'app', iconPath: `${BASE_ICON_PATH}/trash.png`, label: 'Trash' },
]

export default function () {
	const items = useState<DockItem[]>('dock-items', () => BASE_DOCK_ITEMS)

	return {
		items,
	}
}
