import React from 'react'
import img1 from '../images/about.png';

const About = () => {
  return (
    <section id='about'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 p-lg-3 p-2 my-5' >
          <img src={img1} alt='Background_img' className='img-fluid' />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 p-lg-5 p-2 my-5'>
            <h1 className='text-center'>ABOUT US</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. it was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      
      </div>
    </section>
    
  )
}

export default About