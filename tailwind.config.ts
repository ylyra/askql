import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ubuntu)', 'monospace'],
      },

      colors: {
        candy: {
          '50': '#edfcfe',
          '100': '#d2f6fb',
          '200': '#aaecf7',
          '300': '#66d9ef',
          '400': '#2fc2e1',
          '500': '#13a5c7',
          '600': '#1284a8',
          '700': '#166a88',
          '800': '#1b576f',
          '900': '#1b495e',
          '950': '#0c2f40',
        },
        lime: {
          '50': '#ebffe4',
          '100': '#d2ffc4',
          '200': '#a7ff90',
          '300': '#6fff50',
          '400': '#2dff0b',
          '500': '#1ae600',
          '600': '#10b800',
          '700': '#0c8b00',
          '800': '#0f6d07',
          '900': '#105c0b',
          '950': '#013400',
        },
        gum: {
          '50': '#fef1f9',
          '100': '#fde6f4',
          '200': '#feccea',
          '300': '#fea3d8',
          '400': '#fd78c4',
          '500': '#f73da2',
          '600': '#e71b80',
          '700': '#c90d64',
          '800': '#a60e52',
          '900': '#8a1148',
          '950': '#550227',
        },

        blueberry: {
          300: '#323842',
          600: '#151a2a',
          900: '#07061D',
        },
        background: '#030712',
        pistachio: '#D3FFCC',
        cream: '#E2DFCD',
        foam: '#D7DAE2',
      },
    },
  },
  plugins: [],
}
export default config
