<script lang="ts" setup></script>

<template>
	<div id="in-progress-notice">
		<p>Attention: This app is a work in progress!</p>
	</div>
</template>

<style scoped>
#in-progress-notice {
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 1rem;
  background-color: hsl(62, 72%, 51%, 0.5);

  > p {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    user-select: none;
    color: hsl(0, 0%, 0%, 0.8);
  }
}
</style>
