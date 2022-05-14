module.exports = {
  content: [
    "./src/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/img/header.png')",
        'header-slider': "url('/img/header_slider.png')",
        'seccion-nosotros': "url('/img/Nosotros.png')",
      },
      colors: {
        'background': '#04110D',
        'principal': '#1A755A',
				'secondary': '#29B88D',
				'tertiary': '#68DEBB',
      },
      fontFamily: {
				Inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
