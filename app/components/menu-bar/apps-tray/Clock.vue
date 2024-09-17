<script setup lang="ts">
defineProps<{ clock: string }>()
</script>

<template>
	<time :datetime="clock">{{ clock }}</time>
</template>

<style scoped>
time {
	font-size: 0.85rem;
	font-weight: 600;
}
</style>
