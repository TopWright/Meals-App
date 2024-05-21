/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '900px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      'white': 'var(--color-white)',
      'black': 'var(--color-black)',
      'grey': 'var(--color-grey)',
      'primary': 'var(--color-primary)',
      'second': 'var(--color-secondary)',
    },
  },
  plugins: [],
}
