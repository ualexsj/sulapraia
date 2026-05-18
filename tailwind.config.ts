import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { background: '#fffaf6', foreground: '#221612', nude: '#ead4c4', sand: '#d9bd9c', gold: '#c49a52', ocean: '#056b83', aqua: '#94d8cf' },
      fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'], serif: ['var(--font-cormorant)', 'Georgia', 'serif'] }
    }
  },
  plugins: []
};
export default config;
