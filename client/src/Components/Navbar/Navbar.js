import React from "react";
import Pizza from "../../img/Pizza.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Pizza Place</h1>
          <img className="nav-img" src={Pizza} alt="Pizza-logo" />
        </div>

        <div>
          <ul className="nav-items">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact us</li>
            <li>Order now</li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="counter">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
