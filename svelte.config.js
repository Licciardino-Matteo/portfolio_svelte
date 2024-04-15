/* import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: undefined,
            precompress: false,
            strict: true
        })
	}
};
export default config; */

import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
 
    kit: {
        adapter: adapter(),
        paths: {
            base: '/portfolio_svelte',
        },    prerender: {
        handleHttpError: "warn"
    }
    },

};

export default config;