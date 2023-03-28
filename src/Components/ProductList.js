import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

import "../Stylesheet/ProductList.css";

const ProductList = ({ product }) => {
  const { id, thumbnail, title, price } = product;
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-price">${price}</h6>
          <Link to={`/product/${id}`} className="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductList;
