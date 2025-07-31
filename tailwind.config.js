/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,tsx,ts,jsx}",
        "./App.{js,jsx,ts,tsx}",
        "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
