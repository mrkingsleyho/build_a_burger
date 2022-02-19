import React from 'react'
import { FaHamburger } from "react-icons/fa";
import './Header.css';

function Header() {
  return (
    <div>
      <FaHamburger className='icon-burger' />
      <h1>Build A Burger!</h1>
    </div>
  )
}

export default Header