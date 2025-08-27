<script>
	import Timer from "$lib/components/Timer.svelte";
</script>

<main class="container">
	<img src="/logo.svg" alt="Logo" class="logo" />
	<Timer />
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		gap: 3rem;
		padding: 2rem;
	}

	.logo {
		width: 400px;
		height: 120px;
	}

	@media (max-width: 768px) {
		.container {
			gap: 2rem;
			padding: 1rem;
		}
		
		.logo {
			width: 160px;
			height: 160px;
		}
	}
</style>
