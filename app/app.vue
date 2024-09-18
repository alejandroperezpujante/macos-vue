<script setup lang="ts">
useHeadSafe({
	title: 'MacOS Vue',
	link: [
		{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
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
