/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        ".//**/*.{html,js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: { 
        extend: { 
            fontFamily: { 
                'bangers': ['"Bangers"', 'regular'] 
            } 
        }, 
    }, 
    plugins: [
        require('flowbite/plugin')
    ],
  }