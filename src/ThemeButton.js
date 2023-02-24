import React ,{useContext} from 'react';
import ThemeContext from './ThemeContext';

const ThemeButton = () =>
{
  const{theme,toggleTheme} = useContext(ThemeContext);
  

  return(
    <button onClick ={toggleTheme}>
      {
        theme=='light' ? 'SWITCH TO DARK THEME' : 'SWITCH TO LIGHT THEME'
      }
    </button>
  )
};

export default ThemeButton;