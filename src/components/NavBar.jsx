import './NavBar.css'
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom'

import { FaRegUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Authenticate from '/authenticate/Authenticate'

const NavigationBar =(  {navigationBarOptions, dropDown, toggleDarkMode, theme})=>{

    const searchInputRef = useRef(null);

    return(
        <>
          <div className="_navigationBar" style={{padding:"15px 0"}}>
            <div className="_navigationBarDiv">
      <img src={'https://arrive4you.com/assets/images/arrive4you.png'} style={{width:"50%"}} alt="" />
            </div>
            <div className="_navigationBarDiv secChild">
 {


  navigationBarOptions.map((elem, index)=>{
  return (
          <NavLink key={"option"+index}>{elem.name}</NavLink>
  )
 })
 }


{/* DropDown Under "More"  */}

<div className="dropdown">
  <button className="dropbtn">More</button>
  <div className="dropdown-content">
  <NavLink to="">{dropDown[0].name}</NavLink>
  <NavLink to="">{dropDown[1].name}</NavLink>
  <NavLink to="">{dropDown[2].name}</NavLink>
  </div>
</div>
            </div>
            <div className="_navigationBarDiv thirdChild">
<input type="search" name="" id="" placeholder='Search Items' ref={searchInputRef} />
<NavLink to="/member" style={{padding:'0 18px', color:'blue'}}><FaRegUser /></NavLink>
<NavLink to="" style={{padding:'0 18px', color:'blue'}} ><FaCartArrowDown /></NavLink>
<NavLink to="" style={{padding:'0 18px'}} onClick={toggleDarkMode}> <MdLightMode  style={{fontSize:'20px', color: theme === 'light-theme' ? 'black' : 'white'}} />
</NavLink>

            </div>
          </div>
        </>
    )
}

export default NavigationBar 