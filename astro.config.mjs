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
            sidebar: [
                { label: 'Overview', slug: '' },
                { label: 'Grammar Reference', slug: 'document' },
                {
                    label: 'Builtins',
                    items: [
                        { label: 'Overview', slug: 'builtins/builtin' },
                        { label: 'Arithmetic', slug: 'builtins/arithmetic' },
                        { label: 'Comparisons', slug: 'builtins/comparisons' },
                        { label: 'List', slug: 'builtins/list' },
                        { label: 'String', slug: 'builtins/string' },
                        { label: 'Miscellaneous', slug: 'builtins/miscellaneous' },
                        { label: 'Assembly', slug: 'builtins/asm' },
                        { label: 'Network', slug: 'builtins/network' },
                    ],
                },
                { label: 'Cubical Surface Language', slug: 'dcubical' },
                { label: 'How Code is Executed', slug: 'code_map' },
                { label: 'Lispy & Lispu', slug: 'lispy_lispu' },
            ],
        }),
    ],
});