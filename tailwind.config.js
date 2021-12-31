module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: false,
   corePlugins: {
    container: true 
  },
    plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '610px',
          },
          '@screen md': {
            maxWidth: '750px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1316px', 
          },
        }
      })
    } 
  ],
  theme: {
    extend: {
      container: { 
        center: true,
        padding: '1rem',
       }, 
      colors: {
        "primary-100": "#121211",
        
     
      
      
        
        yellow: {
          400:'#BD8F1B',
        
         
        },
        teal: {
          600: '#0D9488',
          100: '#25AE60',
         
        },
        gray:{
          50: '#BEBBB6',
         
        },
        coolGray:{
          900: '#111827',
        
        },
        rose:{
          500: '#F43F5E',
          50: '#F43F5E',
          
          
        },
        emerald:{
          700: '#8F44AD',
          
          
        },
      },
      backgroundImage: {
        "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
        "blue-cyan-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
        "border-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
      
          },


      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-600":"#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'yellow-400': '#FACC15',
        'yellow-300': '#FDE047',
       
       }),
       borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '5': '5px',
       '6': '6px',
       '8': '8px',
       '12': '12px',
       '30': '30px',
      },
     
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '0.375rem',
        'md': '0.625rem',
        'lg': '1.25rem',
        'xl': '0',
        '25': '25px',
      },
      
       fontFamily: { 
         
        display: ['"Jost", sans-serif'],
        body: ['"Poppins", sans-serif'],   
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
         '5xl': '3rem',
         '6xl': '3.5rem',
        '7xl': '3.75rem',
       },
      boxShadow: {
        base:' 0px 1px 3px 0px #0000001A',
        sm:' 0px 8px 20px 0px #00000033',
        md:' 6px 17px 16px 0px #00000026',
        lg:' 6px 17px 16px 0px #00000026',
        none: 'none',

       

      },
      maxWidth: {
        '62.2': '200px',
        '62.5': '242.66px',
        '290':'18.125rem',
        '32.5':'8.125rem',
        '56':'14rem',
        '50':'200px',
        

      },
      minWidth: {
        '82': '595px',
        '52': '13rem',
        '16': '4rem',
        '62': '62px',
        '50': '200px',
        '160': '160px',
        '322': '322px',
      },
      width: {
        '113': '452px',
        '193.5': '774px',
        
        
        
        
       
      },
      height: {
        '15': '3.75rem',
        '12.5':'3.125rem',
        '33':'8.25rem',
        '390':'24.375rem',
        '32.5':'8.125rem',
        '25':'6.25rem',
        '95.25':'381.61px',
        '17.2':'4.375rem',
        '30':'7.5rem',
        '37.5':'150px',
        '218':'218px',
        '39.25':'157px',
        '412':'412px',
        '164':'164px',
        
        
       },
       scale: {
        '0': '0',
       '25': '.25',
      },
      zIndex: {
        '-9999': '-9999',
        '0': 0,
        '1': -1,
        '2': 2,
        'auto': 'auto',
      },
      inset: {
        '45': "180px",
       

      },
      spacing: {
        '50': '200px',
        '33': '132px',
        '16.5': '66px',
        '29': '116px',
        '55': '220px',
        '75': '435px',
        '17.5': '70px',
        

      },
      opacity: {
        '60': '60%',
        '30': '30%',
       },
       
       borderOpacity: {
              '50': '.5',
                
                },
       lineHeight: {
        '0': '0',
        '13': '13px',
        '15': '15px',
        '18': '18px',
        '20': '80px',
        '54': '54px',
        '40.8': '40.8px',
        '86.7': '86.7px',


        
 
       }
    },
  },
  // Other stuff
};
