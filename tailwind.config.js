/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        "350px": "350px",
        "400px": "400px",
        "450px": "450px",
        "750px": "750px",
        "900px": "900px",
      },
      backgroundImage: {
        "logo-facebook": "url(../src/imgs/facebook.png)",
        "logo-instagram": "url(../src/imgs/instagram.png)",
        "logo-twitter": "url(../src/imgs/twitter.png)",
      },
    },
  },
  plugins: [],
};
