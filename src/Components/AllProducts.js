import React  from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";
import Loader from "./Loader";



const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const categoryNames = [...new Set(products.map(({ category }) => category))];

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <section id="product">
      <div className="container m-5">
        <h1 className="text-center my-5">OUR PRODUCTS</h1>
        <ul className="row">
          {/* Loop through the category names */}
          {categoryNames.map((categoryName) => {
            // Filter products by category
            const categoryProducts = products.filter(
              ({ category }) => category === categoryName
            );

            return (
              <li key={categoryName} className="col-12">
                <ProductCategory category={categoryName} />

                <div className="row">
                  {categoryProducts.slice(0, 3).map((product) => (
                    <ProductList key={product.id} product={product} />
                  ))}
                </div>
                <div className="text-center mb-4">
                  <Link
                    to={`/products/category/${categoryName}`}
                    className="bn47"
                  >
                    See More
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AllProducts;
