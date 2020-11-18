/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          100: "#ff8772",
          200: "#eb6f5c",
          300: "#d05746",
          400: "#b43f32",
          default: "#99261e",
          500: "#7e050a",
          600: "#650000",
          700: "#4d0000",
          800: "#3d0000"
        },
        secondary: {
          100: "#759d87",
          200: "#5e8570",
          300: "#486e5a",
          400: "#335845",
          default: "#1e4331",
          500: "#082f1e",
          600: "#001d09",
          700: "#000700",
          800: "#000000"
        },
        salmon: {
          100: "#ffa98c",
          200: "#ff8f75",
          300: "#ff755e",
          400: "#ff5b48",
          default: "#e94033",
          500: "#cc201e",
          600: "#af000a",
          700: "#930000",
          800: "#780000"
        },
      },
      opacity: {
        '10': '0.1',
        '20': '0.2'
      }
    },
    // boxShadow: {
    //   ...defaultTheme.boxShadow,
    //   outline: '0 0 0 3px rgba(0, 86, 87,0.5)'
    // }
  },
  variants: {
    // backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    // borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    // textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}