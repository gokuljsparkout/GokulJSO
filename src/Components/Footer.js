import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../Stylesheet/Footer.css";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="footer_brand">火 Go-kART </h3>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Links</h4>
            <ul className="list-unstyled">
              {isHomePage ? (
                <>
                  <li>
                    <ScrollLink
                      className="scrl"
                      to="home"
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scrl"
                      to="product"
                      smooth={true}
                      duration={500}
                    >
                      Products
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="scrl"
                      to="about"
                      smooth={true}
                      duration={500}
                    >
                      About
                    </ScrollLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/">Back to Home</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <FaFacebook className="me-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <FaTwitter className="me-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <FaGoogle className="me-2" />
                  Google
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram className="me-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="/">
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/">
                  <FaGithub className="me-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-3">
        <div className="container text-center">
          <p className="mb-0">
            Copyright © {new Date().getFullYear()}
            <a href="/#home" className="text-white">
              {" "}
              火 Go-kART{" "}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
