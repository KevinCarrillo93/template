/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'lipstick': "url('https://www.cosmeticsparagon.com/wp-content/uploads/2021/03/mac-matte-lipstick-chili.jpg')",
        'eye': "url('https://www.cosmeticsparagon.com/wp-content/uploads/2021/08/makeup-forever-artist-nude-cream-lipstick-02-flesh-main.jpg')",

        'dior': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dior_Logo.svg/640px-Dior_Logo.svg.png')",
        'avon': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Avon_logo.svg/1280px-Avon_logo.svg.png')" ,
        'loreal': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1200px-L%27Or%C3%A9al_logo.svg.png')",
        'mac': "url('https://assets.stickpng.com/images/5a1ac46ef65d84088faf132c.png')",
        'clarins': "url('https://1000marcas.net/wp-content/uploads/2021/05/Clarins-Logo.png')",
        'kiehls': "url('https://1000marcas.net/wp-content/uploads/2021/05/Kiehls-Logo.png')"
      },
      colors:{
        primary: "#556353",
        secondary: "#FBA744",
        terceary: "#F6F5EC"
      },
      fontFamily:{
        sans: ['Poppins'],
        serif:['Marcellus SC'],
      }
    },
  },
  plugins: [],
}
