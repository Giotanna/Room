import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">RoomiesUniFinder</Link>
      {/* <div className="navbar-logo">RoomiesUniFinder</div> */}
      {/* <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
           <Link to="/login">Login</Link>
        </li>
        
          <li>
            <Link to="/register">Register</Link>
          </li> 
        
      </ul> */}
    </div>
  );
};

export default Navbar;
