<script lang="ts" setup>
import type { AppDockItem } from '~/types'

defineProps<{ item: AppDockItem }>()
</script>

<template>
	<button type="button" class="dock-item">
		<NuxtImg :src="item.iconPath" height="48" width="48" />
	</button>
</template>
