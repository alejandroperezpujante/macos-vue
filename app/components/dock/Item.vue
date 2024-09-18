<script lang="ts" setup>
import type { AppDockItem } from '~/types'

defineProps<{ item: AppDockItem }>()
</script>

<template>
	<button type="button" class="dock-item">
		<NuxtImg :src="item.iconPath" height="52" width="52" />
	</button>
</template>
