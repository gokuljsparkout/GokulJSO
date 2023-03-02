import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/"  exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Home page!</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}


export default App;
