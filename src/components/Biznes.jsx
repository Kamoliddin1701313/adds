import React from 'react'
import Forum from './Forum'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import "./style.css";

const Biznes = () => {
  return (
    <div className="container">
       <Navbar/>
        <div className='main'>
        <Sidebar/>
        <Forum/>
        </div>
    </div>
  )
}

export default Biznes;