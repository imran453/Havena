/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        havena: {
          green: {
            DEFAULT: '#0f5e3a',
            light: '#1e8e5a',
            soft: '#9fccb8',
          },
          orange: '#f97316',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '24px',
      },
    },
  },
  plugins: [],
}
