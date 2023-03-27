import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

const Category = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
    .then(response => response.json())
    .then(data => setProducts(data.products))
    .catch(error => console.error(error));

    // axios.get(`https://dummyjson.com/products/category/${categoryName}`)
    //   .then(response => {
    //     console.log(response.json());
    //     const data = response.data;
    //     setProducts(data.products);
    //   })
    //   .catch(error => console.error(error));
  }, [categoryName]);

  if (products.length === 0) {
    return(
      <div>
          Loading....
      </div>
    );
  }

  return (
    <section id='product'>
      <div className='container m-5'>
        <h1 className='text-center my-5'>{categoryName}</h1>
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
