module.exports = {
  purge: {
      enabled: true,
      content: [
          "./resources/**/*.html",
          "./resources/**/*.vue",
          "./resources/**/*.js",
          "./resources/js/app.js",
          "node_modules/vue-tailwind/dist/*.js",
      ],
  },
  safelist: ["hidden"],
  theme: {
      extend: {
          fontSize: {
              xxs: ".45rem",
          },
          height: {
              "1/7": "14.2857143%",
              "2/7": "28.5714286%",
              "3/7": "42.8571429%",
              "4/7": "57.1428571%",
              "5/7": "71.4285714%",
              "6/7": "85.7142857%",

              xs: ".75rem",
              "7/12": "58.333333%",
              "5/12": "41.666667%",
          },

          dropShadow: {
              base: "0 12px 12px rgba(0, 0, 0, 0.06)",
          },
          colors: {
              transparent: "transparent",
              current: "currentColor",
              orenji: "#FBA95D",
              redji: "#FF5554",
              blueji1: "#49B9FA",
              blueji2: "#1653EF",
              purpleji1: "#BC86FF",
              purpleji2: "#8432EB",
              kuning: "#FFCA57",
              hijau: "#90FC9B",
              ungu: "#DEC3FF",

              "white-100": "#F5F5F5",
              //'white-100': '#E5E5E5',
          },
          transformOrigin: {
              "ayaya-center": "-50% -50%",
          },
          borderRadius: {
              xl: ".89rem",
          },
      },
  },
  plugins: [],
};