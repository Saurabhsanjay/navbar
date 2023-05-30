import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const list = [
    "Profile",
    "My Accounts",
    "Coins",
    "Orders",
    "Wishlist",
    "Cards",
  ];
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="navbar">
      <div>
        <img width="50px" src={logo} alt="error" />
      </div>
      <div className="searchBox">
        <input type="search" />
        <div></div>
      </div>
      <div className="showbox">
        <p onClick={() => setShow(!show)}>Saurabh</p>
        {show && (
          <div className="select">
            {list?.map((el, i) => (
              <div key={i}>{el}</div>
            ))}
          </div>
        )}
      </div>
      <div className="showbox">
        <p>Become A Seller</p>
      </div>
      <div className="showbox">
        <p onClick={() => setShow2(!show2)}>More</p>
        {show2 && (
          <div className="select">
            {list?.map((el, i) => (
              <div style={{color:"black"}} key={i}><p>{el}</p></div>
            ))}
          </div>
        )}
      </div>
      <div className="showbox">
      <div style={{display:"flex",justifyContent:'center',alignItems:"center",gap:"5px"}}>

      <img height='20px' width='20px' src={cart} alt="" />
        <p>Cart</p>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
