import './css/NavBar.css'

import { NavLink } from 'react-router-dom'

import { FaRegUser } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import React, {useContext, useRef} from 'react'
import userContext from "./context/Context";


const NavigationBar =()=>{

    const searchInputRef = useRef(null);
    const value = useContext(userContext);



    return(
      <>
      <div className="_navigationBar" style={{padding:"15px 0"}}>
        <div className="_navigationBarDiv">
<NavLink to='/'>  <img src={'https://arrive4you.com/assets/images/arrive4you.png'} style={{width:"50%"}} alt="" /></NavLink>
        </div>
        <div className="_navigationBarDiv secChild">
{

value.navigationBarOptions.map((elem, index)=>{
return (
      <NavLink to={elem.to} key={"option"+index} className="navLink">{elem.name}</NavLink>
)
})
}


{/* DropDown Under "More"  */}

<div className="dropdown">
<button className="dropbtn">More</button>
<div className="dropdown-content">
<NavLink to="" className="navLink" >{value.dropDown[0].name}</NavLink>
<NavLink to="" className="navLink" >{value.dropDown[1].name}</NavLink>
<NavLink to="" className="navLink" >{value.dropDown[2].name}</NavLink>
</div>
</div>
        </div>
        <div className="_navigationBarDiv thirdChild">
<input type="search" name="" id="" placeholder='Search Items' ref={searchInputRef} />

<NavLink to="/member" style={{padding:'0 18px', color:'blue'}}><FaRegUser className='barIcon'/></NavLink>

<NavLink to="/AddedInCart" style={{padding:'0 18px', color:'blue', position:"relative"}} >
 <sup>
  <span className='cartNumber' 
  style={{position:"absolute", right:"-20px", top:"5px"}}
  >
{value.item.length<=0 ? "" :value.item.length}
  </span>
  </sup>
  <FaCartArrowDown className='barIcon'/>
  </NavLink>


<NavLink to="#" style={{padding:'0 18px'}} onClick={value.toggleDarkMode}> <MdLightMode className='barIcon' style={{fontSize:'20px', color: value.theme === 'light-theme' ? 'black' : 'white'}} />
</NavLink>

        </div>
      </div>
    </>
    )
}

export default NavigationBar 