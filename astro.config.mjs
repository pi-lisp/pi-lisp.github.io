// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    integrations: [
        starlight({
            title: 'pi-lisp',
            description: 'A tiny Lisp in Rust for playful experiments with cubical type theory, dependent types, and native x86-64 assembly.',
            lastUpdated: true,
            editLink: {
                baseUrl: 'https://github.com/pi-lisp/pi-lisp.github.io/edit/main/',
            },
            logo: {
                src: './src/assets/lispy.png',
                alt: 'pi-lisp',
                replacesTitle: false,
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/pi-lisp/pi-lisp' },
            ],
            customCss: ['./src/styles/custom.css'],
        }),
    ],
});