import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div>
      <div>
        <Link style={{textDecoration:'none',margin:'1rem',fontWeight:'bold'}} to='/'>Home</Link>
        <Link style={{textDecoration:'none',margin:'1rem',fontWeight:'bold'}} className="navLink" to='/cart'>Cart</Link>
        <span> Items : 0</span>
      </div>
    </div>
  );
};

export default Navbar;
