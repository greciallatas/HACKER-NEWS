import React from "react";
import '../App.css';

const Navbar = ({brand}) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <span className="navbar-brand">{brand}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
