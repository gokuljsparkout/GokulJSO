import React from "react";
export default function MyComponent({ name, ...rest }) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      {Object.entries(rest).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );
}