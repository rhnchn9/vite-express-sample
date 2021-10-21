import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    server: {
        port: 3000
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'express',
            appPath: './src/app.ts',
            exportName: 'viteNodeApp',
            tsCompiler: 'esbuild'
        })
    ]
});
