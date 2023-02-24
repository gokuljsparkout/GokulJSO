import React , {useState} from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider =({children}) =>
{
  const[theme,setTheme] = useState('light');
  const toggleTheme =()=>{
    setTheme(theme === 'light' ? 'dark': 'light');
  }
  const themeStyles ={
    light :{
      backgroundColor : '#FFFFFF',
      color : '#000000'
    },

    dark: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
    }

  }
  Object.assign(document.body.style, themeStyles[theme])
 
return(
  <ThemeContext.Provider value={{theme,toggleTheme}}style={themeStyles[theme]}>
    {children}
  </ThemeContext.Provider>

)
}

export default ThemeProvider;