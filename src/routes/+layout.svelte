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

	:global(.card) {
		width: 100%;
		height: 100vh;
		font-family: 'Galmuri11', sans-serif;
		background: white;
		border-radius: 15px;
		box-sizing: border-box;
		border: 1px solid rgb(219, 219, 219);
		overflow: hidden;
	}

	:global(*) {
		margin: 0;
	}
</style>