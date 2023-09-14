import React from "react";
import logo from "../images/moviebox-logo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} width={50} height={50} /> <span>MovieBox</span>
          </div>
        </div>
        <div className="menu-container">
          <div className="search">
            <input
              //   onKeyUp={handleKeyUp}
              className="searchTerm"
              placeholder="What do you want to watch?"
            />
            <CiSearch className="search-icon" />
          </div>
        </div>
        <div className="auth">
          <span>Sign In</span>
          <div className="icon">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
