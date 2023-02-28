import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetails from "./ItemDetails.js";
import ItemList from "./ItemList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList/>}/>
        <Route path="/item/:id" element={<ItemDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App;

//The colon (:) before the id parameter tells React Router that this is a dynamic parameter
//that will be different for each item. 
//When a user navigates to a URL that matches this path, 
//React Router will extract the value of the id parameter from the URL and
// pass it as a prop to the ItemDetails component.
