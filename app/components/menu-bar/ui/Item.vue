<script setup lang="ts">

</script>

<template>
	<button class="menu-bar__item">
		<slot />
	</button>
</template>

<style scoped>
	.menu-bar__item {
		padding-block: 0.15rem;
		padding-inline: 0.5rem;
		border-radius: 0.20rem;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		&:active {
			background-color: oklch(100% 0 0 / 0.25);
		}
	}
</style>
