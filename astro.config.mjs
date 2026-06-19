// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
        starlight({
            title: 'uwulisp',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/uwulisp/uwulisp' }],
        }),
    ],
});