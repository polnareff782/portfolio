module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'static-transparent': 'transparent',
        'page-background': '#ffffff', // Remplacez par la couleur réelle
        'brand-background-medium': '#cccccc',
        'accent-solid-medium': '#ff00ff',
        'brand-on-background-weak': '#999999',
      },
      animation: {
        gradient: 'gradientBG 6s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      spacing: {
        16: '4rem', // Exemple pour des tailles spécifiques
      },
    },
  },
  plugins: [],
};
