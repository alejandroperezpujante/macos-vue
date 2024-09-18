<script setup lang="ts">
useHead({
	title: 'MacOS Vue',
	meta: [
		{ name: 'theme-color', content: '#FFFFFF', media: '(prefers-color-scheme: light)' },
		{ name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' },
	],
	link: [
		{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
		{ rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
		{ rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
		{ rel: 'manifest', href: '/site.webmanifest' },
	],
})
</script>

<template>
	<MenuBar />
	<Desktop />
	<Dock />
	<picture class="desktop-wallpaper">
		<source srcset="/images/desktop/wallpaper.avif" type="image/avif">
		<img src="/images/desktop/wallpaper.webp" alt="MacOS Sonoma art">
	</picture>
</template>

<style>
body {
  height: 100dvh;
  padding: 1rem;
  background-color: oklch(0% 0 0);
}

#__nuxt {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.desktop-wallpaper {
  display: contents;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

		border-top-left-radius: 1.25rem;
		border-top-right-radius: 1.25rem;
  }
}
</style>
