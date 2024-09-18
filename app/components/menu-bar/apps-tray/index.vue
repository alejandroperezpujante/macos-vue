<script setup lang="ts">
const { humanClock } = useClock()
</script>

<template>
	<section id="apps-tray">
		<MenuBarUiItem style="padding-block: 0.25rem; padding-inline: 1rem; border-top-right-radius: 0.75rem">
			<MenuBarAppsTrayClock :clock="humanClock" />
		</MenuBarUiItem>
	</section>
</template>

<style scoped>
#apps-tray {
	flex: 1 1 0%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
</style>
