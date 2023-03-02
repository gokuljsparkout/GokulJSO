import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import SearchResultComponent from "./SearchResultComponent";

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<SearchComponent/>}/>
          <Route path='/search' element={<SearchResultComponent/>}/>
        </Routes>
      </Router>
  );
}

export default App;
