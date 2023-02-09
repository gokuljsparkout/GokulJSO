import React from "react";
import Toolbar from "./ToolBar";

//Creating a user defined component and event handler for the component

function App() {
  return (
    <div className="App">
      <Toolbar onPlayMovie={()=>alert('Playing')} onUploadImage={()=>alert('Uploading')}/>
      </div>
  );
}

export default App;