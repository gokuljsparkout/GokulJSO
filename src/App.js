import React from "react";
import { Accordion } from "./Accordion";
import Acc from "./Acc";
function App() {
  return (
    <div className="App">
      <Accordion/> { /* Renders two Panel Components with independent states */ }
      <hr/>
      <Acc/> 
      </div>
  );
}

export default App;