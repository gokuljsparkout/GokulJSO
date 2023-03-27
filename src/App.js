import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import ProductDetailsPage from './Components/ProductDetailsPage'
import Category from './Components/Category'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path='/products/category/:categoryName' element={<Category />} />
      </Routes>
    </Router>
  )
}

export default App
