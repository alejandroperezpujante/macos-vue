<script setup lang="ts">

</script>

<template>
	<div id="notch" role="none" aria-hidden="true" />
</template>

<style scoped>
	#notch {
		z-index: 30;
		width: 11.5rem;
		height: 85%;
		background-color: oklch(0% 0 0);

		--notch-corner-radius: 0.5rem;
		border-bottom-left-radius: var(--notch-corner-radius);
		border-bottom-right-radius: var(--notch-corner-radius);
	}
</style>
