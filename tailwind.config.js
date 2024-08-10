/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: {
        DEFAULT: '#000000',
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#000000'
      },
      green: {
        DEFAULT: '#1a9d74',
        50: '#edfcf5',
        100: '#d4f7e6',
        200: '#adedd1',
        300: '#77deb7',
        400: '#40c798',
        500: '#1a9d74',
        600: '#108b67',
        700: '#0d6f55',
        800: '#0d5844',
        900: '#0b4939',
        950: '#052921'
      },
      blue: {
        DEFAULT: '#19375e',
        50: '#f2f7fd',
        100: '#e4edfa',
        200: '#c3d9f4',
        300: '#8fbbea',
        400: '#5398dd',
        500: '#2c7acb',
        600: '#1d5fac',
        700: '#194c8b',
        800: '#194273',
        900: '#19375e',
        950: '#112440'
      },
      red: {
        DEFAULT: '#fa050d',
        50: '#FFF0F0',
        100: '#FFDDDE',
        200: '#FFC1C3',
        300: '#ff979a',
        400: '#FF5B60',
        500: '#ff282f',
        600: '#fa050d',
        700: '#d30209',
        800: '#ae060b',
        900: '#8f0d11',
        950: '#4f0003'
      },
      gray: {
        DEFAULT: '#dedfe0',
        50: '#f7f7f7',
        100: '#ececed',
        200: '#dedfe0',
        300: '#c6c8ca',
        400: '#abadaf',
        500: '#95989c',
        600: '#85878b',
        700: '#77797e',
        800: '#646569',
        900: '#525356',
        950: '#353536'
      },
      emerald: {
        DEFAULT: '#36b15f',
        50: '#f2fbf5',
        100: '#e0f8e7',
        200: '#c2f0d1',
        300: '#93e2ae',
        400: '#50c878',
        500: '#36b15f',
        600: '#27924c',
        700: '#22733d',
        800: '#205b34',
        900: '#1c4b2e',
        950: '#0a2916'
      },
      yellow: {
        DEFAULT: '#e2c00c',
        50: '#fefee8',
        100: '#fdfdc4',
        200: '#fcf78c',
        300: '#faed4a',
        400: '#f6dc19',
        500: '#e2c00c',
        600: '#c69908',
        700: '#9e6e0a',
        800: '#835710',
        900: '#6f4714',
        950: '#412507'
      },
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bermuda: '#78dcca',
      primary: '#1a9d74',
      'primary-500': '#14694e',
      secundary: '#19375e',
      'secundary-500': '#3e87e6',
      'gray-50': '#f0f0f0',
      'gray-100': '#c9c9c9'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        popins: ['Poppins'],
        garamond: ['Garamond']
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    }
  },
  plugins: []
}
