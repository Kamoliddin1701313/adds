import React from 'react'
import { NavLink } from 'react-router-dom'
import userBtn from "./imgs/userBtn.svg"
const Navbar = () => {
  return (
    <div className="con">
        <div className='navbar'>
        <NavLink to={"/body"}><button className='navbarBtn'>adds</button></NavLink>
        <img src={userBtn} alt="userBtn"/>
      </div>
    </div>
  )
}

export default Navbar