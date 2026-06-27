/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}", "node_modules/flowbite/**/*.js",],
  theme: {
extend: {
  colors: {
    background: "var(--bg)",
    backgroundMuted: "var(--bg-muted)",

    card: "var(--card)",
    navbar: "var(--navbar)",

    textPrimary: "var(--text-primary)",
    textSecondary: "var(--text-secondary)",
    textMuted: "var(--text-muted)",

    border: "var(--border)",

    primary: "var(--primary)",
    primaryHover: "var(--primary-hover)",

    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)",
  },

  backgroundImage: {
    theme: "var(--background-image)",
  },
}
  },
  plugins: [],
};