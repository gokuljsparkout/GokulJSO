import React from 'react';

const ProductCategory = ({ category }) => {
  return (
    <div className='header'>
      <h3 className="text-center">{category}</h3>
    </div>
  );
};

export default ProductCategory;
