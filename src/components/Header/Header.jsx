import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { AuthModal } from "../Modal/AuthModal";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  return (
    <header>
      <div className="header">
        <div className="header-left">
          <img className="header-left-image" src={logo} alt="logo" />
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
              <span onClick={showModal}>Sign In</span>
            </div>
            <div className="header-right-started">
              <span>
                <button onClick={showModal}>Get Started</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
