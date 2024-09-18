<script lang="ts" setup>
import { offset, useFloating } from '@floating-ui/vue'
import type { AppDockItem } from '~/types'

defineProps<{ item: AppDockItem }>()

const open = ref(false)
const itemRef = useTemplateRef<HTMLButtonElement>('item')
const tooltipRef = useTemplateRef<HTMLDivElement>('tooltip')
const { floatingStyles, middlewareData } = useFloating(itemRef, tooltipRef, {
	placement: 'top',
	open,
	middleware: [offset(5)],
})
</script>

<template>
	<button ref="item" type="button" class="dock-item" @mouseenter="open = true" @mouseleave="open = false">
		<NuxtImg :src="item.iconPath" height="52" width="52" class="dock-item__icon" />
	</button>
	<div v-if="open" ref="tooltip" :style="floatingStyles" class="dock-tooltip">
		<span class="dock-tooltip__text">{{ item.label }}</span>
	</div>
</template>

<style scoped>
.dock-item {
	z-index: 20;

	&:active {
		filter: brightness(0.5);
	}
}
.dock-item__icon {
	pointer-events: none;
}

.dock-tooltip {
	z-index: 20;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding-inline: 0.75rem;
	padding-block: 0.15rem;
	border-radius: 0.35rem;
	background-color: rgb(185, 208, 147);
	box-shadow: 0 0 0.25rem oklch(0% 0 0 / 0.2);
}

.dock-tooltip__text {
	font-size: 0.65rem;
	line-height: 1rem;
	font-weight: 300;
	color: oklch(0% 0 0);
}
</style>
