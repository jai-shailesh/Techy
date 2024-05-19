import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "darkNav" : ""}`}>
      <div className="nav-left">
        <Link to="home" smooth={true} offset={0} duration={500}>
          <h1>
            Te<span>ch</span>y
          </h1>
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <ul>
            <li>
              <Link to="home" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About Us{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="service" smooth={true} offset={-250} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                smooth={true}
                offset={-200}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn">
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact Us
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
