import React from 'react';
import './App.css';

const App = () => {

  const handleClick = event=>{
    const el = event.currentTarget;
    console.log(el);
    el.textContent = 'GO';

    setTimeout(()=>{el.classList.add('circle')
    setTimeout(()=>{el.classList.add('red')
    setTimeout(() => {el.classList.remove('circle')
    setTimeout(() => {el.classList.remove("red");
                      el.classList.add("purple");
                      setTimeout(()=> {el.classList.add("fadeOut")
  },300)
  },300)
  },250)
  },500)
  },2000)
    
    
    
   }
  return (
    <div className='go' onClick={handleClick}>Click Me</div>
  )
}

export default App