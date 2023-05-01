import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
          <div className="header-right-options">
            <div className="header-right-option">
              <span>Our Story</span>
            </div>
            <div className="header-right-option">
              <span>Membership</span>
            </div>
            <div className="header-right-option">
              <span>Write</span>
            </div>
            <div className="header-right-option">
              <span>Sign In</span>
            </div>
            <div className="header-right-started">
              <span>
                <button>Get Started</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
