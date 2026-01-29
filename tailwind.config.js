/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // In Tailwind v4, this might be handled differently, but keeping 'class' for v3 compat.
    // v4 usually detects this via CSS, but let's ensure compat.
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
}
