import React from 'react'
import About from './About'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'
import AllProducts from './AllProducts'

const HomePage = () => {


  return (
    <div>
      <NavBar/>
      <Home/>
      <AllProducts/>
      <About/>
      <Footer/>
    </div>
  )
}

export default HomePage