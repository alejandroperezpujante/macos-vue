import appStoreIcon from '~/assets/images/dock/app_store.png'
import contactsIcon from '~/assets/images/dock/contacts.png'
import facetimeIcon from '~/assets/images/dock/facetime.png'
import finderIcon from '~/assets/images/dock/finder.png'
import launchpadIcon from '~/assets/images/dock/launchpad.png'
import mailIcon from '~/assets/images/dock/mail.png'
import mapsIcon from '~/assets/images/dock/maps.png'
import messagesIcon from '~/assets/images/dock/messages.png'
import musicIcon from '~/assets/images/dock/music.png'
import notesIcon from '~/assets/images/dock/notes.png'
import photosIcon from '~/assets/images/dock/photos.png'
import remindersIcon from '~/assets/images/dock/reminders.png'
import safariIcon from '~/assets/images/dock/safari.png'
import trashIcon from '~/assets/images/dock/trash.png'
import type { DockItem } from '~/types'

const BASE_DOCK_ITEMS: DockItem[] = [
	{ type: 'app', icon: finderIcon, label: 'Finder' },
	{ type: 'app', icon: launchpadIcon, label: 'Launchpad' },
	{ type: 'app', icon: safariIcon, label: 'Safari' },
	{ type: 'app', icon: messagesIcon, label: 'Messages' },
	{ type: 'app', icon: mailIcon, label: 'Mail' },
	{ type: 'app', icon: mapsIcon, label: 'Maps' },
	{ type: 'app', icon: photosIcon, label: 'Photos' },
	{ type: 'app', icon: facetimeIcon, label: 'FaceTime' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/calendar.png`, label: 'Calendar' },
	{ type: 'app', icon: contactsIcon, label: 'Contacts' },
	{ type: 'app', icon: remindersIcon, label: 'Reminders' },
	{ type: 'app', icon: notesIcon, label: 'Notes' },
	{ type: 'app', icon: musicIcon, label: 'Music' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/keynote.png`, label: 'Keynote' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/numbers.png`, label: 'Numbers' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/pages.png`, label: 'Pages' },
	{ type: 'app', icon: appStoreIcon, label: 'App Store' },
	// { type: 'app', iconPath: `${BASE_ICON_PATH}/system_preferences.png`, label: 'System Preferences' },
	{ type: 'separator' },
	{ type: 'app', icon: trashIcon, label: 'Trash' },
]

export default function () {
	const items = useState<DockItem[]>('dock-items', () => BASE_DOCK_ITEMS)

	return {
		items,
	}
}
