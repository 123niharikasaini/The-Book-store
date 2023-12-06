/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens:{
      xs:'200px',
      s:'300px',
      sm:'640px',
      md:'768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px'
    },

    extend: {
      boxShadow: {
        myCustomShadow: '0 2px 2px 5px rgba(0, 0, 0, 0.5)',
        myCustomShadow2: '0 0 2px 2px rgba(0, 0, 0, 0.5)',
      },
    },

    fontFamily:{
      new:["Agbalumo"],
      new2:["Calibri "]
    }
  },
  plugins: [],
}

