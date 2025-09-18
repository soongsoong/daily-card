<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/galmuri/dist/galmuri.css" />
</svelte:head>

{@render children?.()}

<style>
	@import '$lib/global.css';
	
	:global(body) {
		width: 100%;
		margin: 0;
		display: flex;
	}

	:global(iframe) {
		border: none;
	}

	:global(*) {
		margin: 0;
	}
</style>