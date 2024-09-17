<script setup lang="ts">
const { items } = useDockStore()
</script>

<template>
	<DockContainer>
		<DockList :items />
	</DockContainer>
</template>
