import React from 'react'

import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { useRef, useState } from 'react'
import Button from './Button';
import './TwoSideBox.css'
import img1 from '../assets/2.jpg'
function TwoSideBox() {
    const imageRef= useRef(null)

let [upOrIn, setUpOrIn] = useState('in')
let [inUp, setInUp] =useState("Sign Up")
let [inUp2, setInUp2] =useState("Sign In")


const signUpSignIn=()=>{
    if(upOrIn === "in"){
            document.body.className= 'signUp'
        setUpOrIn("up")
        setInUp("Sign In")
        setInUp2("Sign Up")
    }
    
    else{
        document.body.classList.remove("signUp")   
        setUpOrIn("in")
        setInUp("Sign Up")
        setInUp2("Sign In")
    }
    console.log(upOrIn);
}



  return (
<>
    <div className="main">
<img src={img1} alt="" className={`rightImg`} ref={imageRef}/>

<div className="parent">
        <div className="leftSide"
        style={{order:upOrIn === 'in' ? '1':'2'}}
        >
        <div className="leftSideText" >
        <h1>{
            upOrIn === 'in' ? 'New Here?': 'One of Us?'
        }</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, veniam.</p>
        {/* <button
        className={`accountCreateBtn`}
         onClick={signUpSignIn}>
            {
                upOrIn === 'in' ? 'Sign Up':'Sign In'
            }
        </button> */}
        
<Button label={inUp} signUpSignIn={signUpSignIn}></Button>
        </div>
        {/* <input type="button" value="Signup" /> */}
        </div>


        <div className="rightSide"
        style={{order:upOrIn ==='in' ? '2': '1', paddingRight:upOrIn==='in' && '80px', paddingLeft:upOrIn==='up' && '80px'}}
        >
<h1>
    {
        upOrIn === 'in' ? 'Sign in': 'Sign Up'
    }
</h1>
<div className="info">
<div>
    <CiUser className='icons'></CiUser> <input placeholder="Username" type="text"/ >
</div>
<div>
  <AiOutlineMail className='icons'></AiOutlineMail>  <input placeholder="Email" type="text"/>
</div>
<div>
   <RiLockPasswordLine className='icons'></RiLockPasswordLine> <input placeholder="Password" type="text"/>   
</div>
</div>

{/* <Button upOrIn={upOrIn}></Button> */}
<Button label={inUp2}></Button>


<div className="otherSignin">
    <p>Sign {upOrIn === 'in' ? 'In':'Up'} with</p>
</div>
        </div>
        </div>
    </div>
    
</>
  )
}

export default TwoSideBox