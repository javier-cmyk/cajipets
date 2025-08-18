/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: 'normal', letterSpacing: '-1.28px' }],
        'section': ['48px', { lineHeight: 'normal', letterSpacing: '-0.96px' }],
      },
      colors: {
        'gray-light': '#f7f7f7',
        'text-secondary': '#828282',
        'text-muted': '#444444',
      },
      boxShadow: {
        'button': '0 4px 8px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}