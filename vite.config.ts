import { defineConfig } from 'vite';
import mdx from 'vite-plugin-mdx';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react(), mdx()],
	root: './src',
	server: {
		open: true,
		port: 1234
	}
});
