<script setup lang="ts">
const { clock } = storeToRefs(useClockStore())
</script>

<template>
	<section id="apps-tray">
		<MenuBarUiItem style="padding-block: 0.25rem; padding-inline: 1rem; border-top-right-radius: 0.75rem">
			<MenuBarAppsTrayClock :clock />
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
