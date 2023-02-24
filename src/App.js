import React from "react";
import ThemeButton from "./ThemeButton";
import ThemeProvider from "./ThemeProvider";

//useContext
function App()
{
  return (
    <div className="App">
      <ThemeProvider>
      <ThemeButton/>
      </ThemeProvider>
      
      </div>
  )
}
export default App;