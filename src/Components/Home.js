import React from "react";

import "../Stylesheet/Home.css";

const Home = () => {
  return (
    <section id="home">
      <h1 className="text-center">SHOP NOW</h1>
      <p>
        Better check <span className="brand">Go-kART</span> !!!
      </p>
      <div className="input-group m-4">
        <input
          className="form-control"
          id="form-input"
          type="text"
          placeholder="Email Address"
        ></input>
        <button className="btn signin">Get Started</button>
      </div>
    </section>
  );
};

export default Home;
