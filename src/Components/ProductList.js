import { Link } from "react-router-dom";
import React from "react";
import '../ProductList.css';

const ProductList = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={product.thumbnail} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h6 className="card-price">${product.price}</h6>
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
