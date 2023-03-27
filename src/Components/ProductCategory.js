import React from "react";

const ProductCategory = ({ category }) => {
  return (
    <div className="header">
      <h2
        className="text-center"
        style={{
          textAlign: "center",
          borderBottom: "1px solid grey",
          paddingBottom: "10px",
          marginBottom: "20px",
          backgroundColor: "lightgrey",
        }}
      >
        {category}
      </h2>
    </div>
  );
};

export default ProductCategory;
