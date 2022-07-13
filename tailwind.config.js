const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                main: { white: '#F1F1F1', blue: '#132B3B' },
                oranges: { default: '#F26628', light: '#F8A36C' },
                green: '#95DACB',
                black: '#0D181D',
                pureblack: colors.black,
                blue: {
                    light: '#305D7A',
                    default: '#224860',
                    dark: '#132B3B',
                },
                white_bone: '#F1F1F1', // sebelumnya milih white, diubah menjadi milik white_bone
                white: '#FFFFFF',
                gray: {
                    lighter: '#F1F1F1',
                    darker: '#D9D8D3',
                },
                accent: {
                    yellow: {
                        dark: '#F4A606',
                        DEFAULT: '#FFDE51',
                        light: '#FFEFA9',
                    },
                    red: '#DC3647',
                    blue: {
                        dark: '#1B323B',
                        DEFAULT: '#348AC5',
                    },
                },
            },
            screens: {
                portrait: {
                    raw: '(orientation: portrait)',
                },
            },
            zIndex: {
                '-1': '-1',
                '-2': '-2',
            },
            transitionProperty: {
                height: 'height',
            },
            scale: {
                '-1': '-1',
            },
            fontFamily: {
                display: ['Mont', 'system-ui', 'sans-serif'],
                body: ['Lato', 'system-ui', 'sans-serif'],
                samarkan: ['Samarkan', 'sans-serif'],
                Mont: ['Mont', 'sans-serif'],
            },
            dropShadow: {
                blue: '0 8px 0 #224860',
            },
            fontWeight: {
                semilight: 350,
            },
        },
    },
    variants: {
        extend: {
            dropShadow: ['hover'],
            backgroundOpacity: ['active'],
            filter: ['hover', 'active'],
            brightness: ['hover', 'active'],
            transform: ['group-hover', 'active'],
            translate: ['group-hover', 'active'],
            // scale: ['group-hover'],
            ringWidth: ['hover'],
            ringColor: ['hover'],
            ringOffsetWidth: ['hover'],
            ringOpacity: ['hover'],
            margin: ['group-hover'],
            borderRadius: ['hover'],
        },
    },
    plugins: [forms({ strategy: 'class' })],
    important: '#page',
};
