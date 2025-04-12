/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // kalau kamu pakai App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // kalau pakai Pages Router
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          fredoka: ['Fredoka', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  