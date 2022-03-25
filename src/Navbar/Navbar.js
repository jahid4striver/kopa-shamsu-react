import React from "react";
import "./Navbar.css";
import {BsCart3} from 'react-icons/bs'

const Navbar = ({openModal, cart}) => {
  return (
    <nav className='navbar'>
      <h1>Kopa Samsu Store</h1>
<div className="cart-counter" onClick={openModal}>
  <span>{cart.length}</span>
<BsCart3 className="icon" color="#fff"></BsCart3>
</div>
    </nav>
  );
};

export default Navbar;
