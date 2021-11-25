const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  variants: {
    extend: {
      height: ['hover', 'focus'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFF',
      black: '#000',
      red: '#CF1430',
      grey: {
        dark: '#0E1414',
        DEFAULT: '#C2C2C2',
        light: '#F0F0F0'
      }
    }
  },
};
