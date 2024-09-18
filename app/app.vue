<script setup lang="ts">
import desktopWallpaper from '~/assets/images/desktop_wallpaper.png'

useHead({
	title: 'MacOS Vue',
	bodyAttrs: {
		style: {
			'background-image': `url(${desktopWallpaper})`,
		},
	},
})
</script>

<template>
	<MenuBar />
	<Desktop />
	<Dock />
</template>

<style>
:root {
	height: 100dvh;
	padding: 1rem;
	background-color: oklch(0% 0 0);
}
body {
	height: 100%;
	display: flex;
	flex-direction: column;

	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
}

#__nuxt {
	display: contents;
}
</style>
