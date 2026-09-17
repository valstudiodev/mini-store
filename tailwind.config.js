/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // НАЛАШТУВАННЯ ГЛОБАЛЬНОГО КОНТЕЙНЕРА:
      container: {
        center: true,      // Автоматично додасть margin: 0 auto
        padding: '1rem',   // Автоматично додасть padding зліва і справа (px-4)
      },
    },
  },
  plugins: [],
}