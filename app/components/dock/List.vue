<script lang="ts" setup>
import type { DockItem } from '~/types'

defineProps<{ items: DockItem[] }>()
</script>

<template>
	<ul class="dock-list">
		<li v-for="(item, index) in items" :key="index">
			<DockItem v-if="item.type === 'app'" :item="item" />
			<DockSeparator v-else />
		</li>
	</ul>
</template>

<style scoped>
.dock-list {
	display: flex;
	align-items: center;
	gap: 1rem;
}
</style>
