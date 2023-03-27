import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetailsPage.css";
import Loader from "./Loader";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="img-holder">
                <img src={product.images[1]} alt={product.title} />
              </div>
              <div className="img-holder">
                <img src={product.images[2]} alt={product.title} />
              </div>
              <div className="img-holder">
                <img src={product.images[3]} alt={product.title} />
              </div>
            </div>
            <div className="basic-info">
              <h1>{product.title}</h1>
              <div className="description">
                <p>{product.description}</p>
              </div>
              <span>${product.price}</span>
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
