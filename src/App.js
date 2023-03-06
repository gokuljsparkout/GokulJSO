import React, { useState } from 'react';
import {  BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function Home({isLoggedIn}) {

  return (
    <div>
      <h2>Home</h2>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>This is the contact page.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    history.push('/');
  };
  //When the user clicks the "Login" button in the navigation menu,
  //the handleLogin function is called.
  //This function sets the isLoggedIn state variable to true,
  //which causes the "Login" button to be replaced with a "Logout" button in the navigation menu.
  //It also calls the push method on the history object,
  //which updates the URL to / and causes the Router component to render the Home component.

  const handleLogout = () => {
    setIsLoggedIn(false);
    history.push('/');
  };

  return (
    <Router history={history}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
      <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
