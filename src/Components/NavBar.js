import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

import "../Stylesheet/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid">
          {!isHomePage ? (
            <Link to="/" className="navbar-brand">
              火 Go-kART{" "}
            </Link>
          ) : (
            <ScrollLink
              className="navbar-brand"
              to="home"
              smooth={true}
              duration={500}
            >
              火 Go-kART{" "}
            </ScrollLink>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              {isHomePage ? (
                <>
                  <li className="nav-item">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink
                      to="product"
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      Products
                    </ScrollLink>
                  </li>
                  <li className="nav-item">
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={500}
                      className="nav-link"
                    >
                      About
                    </ScrollLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    🡠 Back to Home
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                id="navbutton"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
