import React from "react";
import Product from "./Product"

function App() {
  return (
    <div className="App">
      <Product
        name="Amazon Echo"
        description ="Your AI Assistant"
        price={15.00}
      />
      <Product
        name="Amazon Echo X"
        description ="Your AI Assistant"
        price={35.00}
      />
      <Product
        name="Amazon Echo Pro"
        description ="Your AI Assistant"
        price={85.00}
      />
    </div>
  );
}

export default App;