import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const items = useSelector((state)=> state.cart); 
  //it will subscribe to the data and automatically provide us with the new and updated value
  return (
    <div className='navDiv'>
        <span className='navHeading'>REDUX STORE</span>
        <nav className='nav'>
            <NavLink to='/' className="home">Home</NavLink>
            <NavLink to='/cart' className="cart">Cart</NavLink>
            <span className='cartCount'>Cart Items : {items.length}</span>
        </nav>
    </div>
  )
}

export default Navbar;