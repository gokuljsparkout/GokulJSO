import React from "react";
import img1 from "../images/about.png";

import "../Stylesheet/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 p-lg-3 p-2 my-5">
            <img src={img1} alt="Background_img" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-lg-5 p-2 my-5">
            <h1 className="text-center">ABOUT US</h1>
            <p>
              Welcome to Go-Kart, your ultimate destination for all things
              e-commerce! Our company was founded with the mission of providing
              high-quality products and exceptional customer service to our
              customers around the world.
            </p>
            <p>
              {" "}
              At Go-Kart, we believe that online shopping should be a seamless
              and enjoyable experience, which is why we offer a wide variety of
              products that cater to all your needs. From the latest tech
              gadgets to trendy fashion accessories, we have something for
              everyone.
            </p>
            <p>
              We take great pride in our commitment to customer satisfaction,
              which is reflected in our easy-to-use website, fast and reliable
              shipping, and responsive customer support team.
            </p>
            <p>
              {" "}
              We also believe in transparency and honesty, and we strive to
              provide our customers with all the information they need to make
              informed purchasing decisions.
            </p>
            <p>
              As a company, we are constantly innovating and adapting to the
              changing needs of the e-commerce industry. We are committed to
              staying up-to-date with the latest trends and technologies to
              ensure that we continue to provide our customers with the best
              possible shopping experience.
            </p>
            <p>
              Thank you for choosing Go-Kart as your preferred e-commerce
              destination. We look forward to serving you and providing you with
              an exceptional shopping experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
