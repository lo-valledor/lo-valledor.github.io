import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-vercel optimized for Vercel deployment
		adapter: adapter({
			// Optional: configure Vercel-specific options
			runtime: 'nodejs20.x'
		})
		// Remove paths.base since Vercel handles routing automatically
	}
};

export default config;
