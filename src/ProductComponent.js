import { products } from "./data/productdata.js";
import Product from "./Product";


const fetchProductData = () => {
  return products;
}

const ProductComponent = () =>{
  const productdata = fetchProductData();
  return(
  <div className="product-container">
    <h1>Products</h1>
    <ul className="product-list">
      {
        productdata.map((product)=>(
          <Product product={product} />
        )) }

    </ul>
  </div>

)};
export default ProductComponent;

