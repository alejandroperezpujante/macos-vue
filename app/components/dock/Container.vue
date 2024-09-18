<script lang="ts" setup>

</script>

<template>
	<div class="dock-container">
		<slot />
	</div>
</template>

<style scoped>
.dock-container {
	height: 4rem;
	margin-inline: auto;
	margin-bottom: 0.25rem;
	padding-inline: 0.5rem;
	border: 1px solid oklch(100% 0 0 / 0.2);
	border-radius: 1.25rem;
	place-content: center;

	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	background-color: oklch(100% 0 0 / 0.1);
}
</style>
