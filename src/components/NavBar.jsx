import './NavBar.css'
import React, { useRef, useEffect } from 'react';
// import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom'

import { FaRegUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { MdModeNight } from "react-icons/md";




const NavigationBar =({navigationBarOptions, dropDown})=>{
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
          <Link key={"option"+index} to="">{elem.name}</Link>
  )
 })
 }


{/* DropDown Under "More"  */}

<div className="dropdown">
  <button className="dropbtn">More</button>
  <div className="dropdown-content">
  <Link to="">{dropDown[0].name}</Link>
  <Link to="">{dropDown[1].name}</Link>
  <Link to="">{dropDown[2].name}</Link>
  </div>
</div>
            </div>
            <div className="_navigationBarDiv thirdChild">
<input type="search" name="" id="" placeholder='Search Items' ref={searchInputRef} />
<Link to="" style={{padding:'0 18px'}}><FaRegUser /></Link>
<Link to="" style={{padding:'0 18px'}}><FaCartArrowDown /></Link>
<Link to="" style={{padding:'0 18px'}}><MdModeNight /></Link>
            </div>
          </div>
        </>
    )
}

export default NavigationBar 