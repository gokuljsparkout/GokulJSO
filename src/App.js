import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import ProductDetailsPage from './Components/ProductDetailsPage'
import Category from './Components/Category'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path='/products/category/:categoryName' element={<Category />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
