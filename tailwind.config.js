/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1f2025',
        'accent-teal': '#2b84aa',
        'accent-teal-hover': '#226f90',
        'accent-teal-light': '#eef6f9',
        'primary': '#2563EB',
        'primary-light': '#3b82f6',
        'secondary': '#1E3A8A',
        'background-light': '#ffffff',
        'background-dark': '#0f172a',
        'card-blue': '#3B82F6',
        'dark-blue-card': '#1e40af',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
}
