<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Countdown Timer</title>
</svelte:head>

<main class="app-container" style="--bg-image: url('/fondo.webp')">
	{@render children?.()}
</main>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow-x: hidden;
	}

	.app-container {
		background-image: var(--bg-image);
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.app-container::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: -1;
	}
</style>
