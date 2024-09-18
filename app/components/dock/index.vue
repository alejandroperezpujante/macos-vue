<script setup lang="ts">
const { items } = useDock()
</script>

<template>
	<DockContainer>
		<DockList :items />
	</DockContainer>
</template>
