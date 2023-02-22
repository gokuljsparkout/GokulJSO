import React, { Component } from 'react';
function ChildComponent({ someProp, count }) {
  return (
    <div>
      <p>Child Component:</p>
      <p>Received someProp: {someProp}</p>
      <p>Count: {count}</p>
    </div>
  );
}

export default ChildComponent;
