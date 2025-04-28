import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Prevent scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(false);
    navigate("/login");
    handleLinkClick();
  };

  return (
    <nav className={`${isScrolled ? "scrolled" : ""}`}>
      <img
        src="images/Logo.PNG"
        alt="WATCHSHOP"
        className="logo"
        onClick={() => {
          navigate("/");
          handleLinkClick();
        }}
      />
      <button
        className="mobile-menu-btn"
        onClick={handleMenuClick}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}></span>
      </button>
      <div className={`left-bar ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/shopnow" onClick={handleLinkClick}>
              ShopNow
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li>
            <button onClick={handleLogin} className="btn-primary">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
