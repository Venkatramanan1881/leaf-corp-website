import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F7F0',
        leaf: { DEFAULT: '#2F7D32', dark: '#1F5C24', light: '#E4F0E2' },
        ink: '#161816',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk Variable"', 'system-ui', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
      keyframes: { marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 30s linear infinite' },
    },
  },
  plugins: [],
};
export default config;
