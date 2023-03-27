import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'
import '../Nav.css'
import '../Footer.css'
import '../ProductDetailsPage.css'

const ProductDetailsPage = () => {
  const { id } = useParams() 
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error))
  }, [id])

  if (product) {
    return (
        <div className="container">
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
        </div>
    )
  }

  return (
    <>

    <NavBar/>
    <section id=''>
    <div class="container">
        <div class="box">
            <div class="images">
                <div class="img-holder active">
                    <img src={product.images[0]}/>
                </div>
                <div class="img-holder">
                    <img src={product.images[1]}/>
                </div>
                <div class="img-holder">
                    <img src={product.images[2]}/>
                </div>
                <div class="img-holder">
                    <img src={product.images[3]}/>
                </div>
            </div>
            <div class="basic-info">
                <h1>{product.title}</h1>
                <div class="rate">
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                    <i class="filled fas fa-star"></i>
                </div>
                <div class="description">
                <p>{product.description}</p>
            </div>
                <span>${product.price}</span>
                <div class="options">
                    <a href="#">Buy now</a>
                </div>
            </div>
            
        </div>
    </div>
    </section>

    <Footer/>
    
    </>


  )
}

export default ProductDetailsPage;
