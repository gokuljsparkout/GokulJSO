import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "./Loader";

import "../Stylesheet/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { title, description, price, images } = product || {};

  useEffect(() => {
    const fetchProductsById = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsById();
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <>
      <section id="category">
        <div className="container">
          <div className="box">
            <div className="images">
              <div className="img-holder active">
                <img src={images[0]} alt={title} />
              </div>
              <div className="img-holder">
                <img src={images[1]} alt={title} />
              </div>
              <div className="img-holder">
                <img src={images[2]} alt={title} />
              </div>
              <div className="img-holder">
                <img src={images[3]} alt={title} />
              </div>
            </div>
            <div className="basic-info">
              <h1>{title}</h1>
              <div className="description">
                <h4>{description}</h4>
              </div>
              <span>${price}</span>
              <div className="options">
                <a href="#category">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
