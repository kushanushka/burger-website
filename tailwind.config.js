/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode:'class',
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg: "1024px"

    },
    extend: {
      colors: {
        primarycolor: '#010a5e',
        primarylight: '#010d78',
        secondary: '#FFCC00',
        paragraph:'#c0c0c0',
        whiteColor: '#fff',
        black:"#000",
        green: "#007936",
        red: "#cc3433",
        dark: '#000',
        darklight:'#171717',

      },
      keyframes: {
        move: {
          "50%":{transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }
      

    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
   fontFamily: {
      oswald: ['Oswald','sans-serif'],
      dmsans: ['dmsans','sans-serif']
    }
  },
  plugins: [],
}