/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
        "logo-banner": "url(../src/imgs/banner.jpeg)",
        "img-perfil": "url(../src/imgs/perfil.png)",
        "img-1": "url(../src/imgs/img1.jpg)",
        "img-2": "url(../src/imgs/img2.jpg)",
        "img-3": "url(../src/imgs/img3.jpg)",
        "img-4": "url(../src/imgs/img4.jpg)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
