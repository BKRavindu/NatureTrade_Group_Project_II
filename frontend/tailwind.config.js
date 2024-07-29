/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins","sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      },

      fontFamily:{
        sans: ["Poppins", "sans-serif"],

        rotate:{
          'x-45': '45deg',
        }
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
      colors:{
          primary: "#E8D318",
          secondary:"#facc15",
          brandDark:"#854d0e",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl": "6rem",
        },
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      }


    }
  },
  plugins: [],
}

