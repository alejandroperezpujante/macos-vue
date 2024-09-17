// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	css: ['~/assets/styles/main.css'],

	modules: [
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/icon',
		'@vueuse/nuxt',
		'@pinia/nuxt',
	],
	icon: {
		mode: 'svg',
		attrs: { fill: 'currentColor', style: 'display: inline-block' },
	},
	eslint: {
		config: { standalone: false },
	},

	future: { compatibilityVersion: 4 },
	experimental: { watcher: 'parcel' },

	devtools: { enabled: true },
})
