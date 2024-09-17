<script setup lang="ts">
</script>

<template>
	<div id="menu-bar">
		<MenuBarAppActions />
		<MenuBarNotch />
		<MenuBarAppsTray />
	</div>
</template>

<style scoped>
	#menu-bar {
		z-index: 20;
		width: 100%;
		height: 2.35rem;

		--menu-bar-corner-radius: 1rem;
		border-top-left-radius: var(--menu-bar-corner-radius);
		border-top-right-radius: var(--menu-bar-corner-radius);

		padding-inline: 0.25rem;
		display: flex;

		color: oklch(100% 0 0);

		backdrop-filter: blur(25px);
		-webkit-backdrop-filter: blur(25px);
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
	}
</style>
