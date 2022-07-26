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
                    default: '#B3B3B3',
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
                '780px': { max: '780px' },
                '768px': { max: '768px' },
                '998px': '998px',
                '320px': { min: '320px', max: '768px' },
                '1024px': { min: '768px', max: '1024px' },
                '1280px': { min: '0px', max: '1280px' },
                agenda: { min: '0px', max: '768px' },
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
                body: ['Gill', 'sans-serif'],
                samarkan: ['Samarkan', 'sans-serif'],
                mont: ['Mont', 'sans-serif'],
                gill: ['Gill', 'sans-serif'],
            },
            dropShadow: {
                blue: '0 8px 0 #224860',
            },
            fontWeight: {
                semilight: 350,
            },
            width: {
                21: '85px',
                1100: '1122px',
            },
            height: {
                xxl: '1536px',
                xl: '1080px',
                lg: '720px',
                md: '480px',
            },
            borderWidth: {
                6: '6px',
            },
            flexBasis: {
                '1' : '33.33333%',
                '2' : '66.66666%',
            }
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
