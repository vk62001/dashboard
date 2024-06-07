/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors:{
        orange: colors.orange,
        gray: colors.gray,
        black: colors.black,
        white: colors.white,
        purple: colors.purple,
        blue: colors.blue,
        yellow: colors.yellow,
        pink: colors.pink,
        stone: colors.stone,
        zinc: colors.zinc,
        indigo:colors.indigo,
        'bigStone': {
          '50': '#f4f7fb',
          '100': '#e9eff5',
          '200': '#cedde9',
          '300': '#a3c0d6',
          '400': '#719ebf',
          '500': '#4f81a8',
          '600': '#3d688c',
          '700': '#325372',
          '800': '#2d485f',
          '900': '#293d51',
          '950': '#1a2633',
      },
    },
    extend: {},
  },
  plugins: [],
}