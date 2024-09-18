// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	css: ['~/assets/styles/main.css'],

	modules: [
		'@nuxt/eslint',
		'@nuxt/icon',
		'@vueuse/nuxt',
		'radix-vue/nuxt',
	],
	icon: {
		mode: 'svg',
		attrs: { fill: 'currentColor', style: 'display: inline-block' },
	},
	radix: {
		prefix: 'RV',
	},
	eslint: {
		config: { standalone: false },
	},

	future: { compatibilityVersion: 4 },
	experimental: { watcher: 'parcel' },

	devtools: { enabled: true },
})
