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
	gap: 0.40rem;
}

li {
	transition: transform 0.1s ease-in-out;
}
li:hover {
	transform: scale3d(1.3, 1.3, 1.3);
}
li:has(+ li:hover) {
	transform: scale3d(1.1, 1.1, 1.1);
}
li:hover + li {
	transform: scale3d(1.1, 1.1, 1.1);
}
</style>
