
const Product =({product}) => {
  return(
    <li className ="product" >
      <img src ={product.image} alt= {product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
    </li>
    
  )
};
export default Product;