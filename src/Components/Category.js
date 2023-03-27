import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loader from "./Loader";
const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductByCategory();
  }, [categoryName]);

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <section id="product">
      <div className="container m-5">
        <h1 className="text-center my-5">{categoryName}</h1>
        <ul className="row">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Category;
