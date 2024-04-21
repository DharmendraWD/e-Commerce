import { React, useRef, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import './HorizontalBarOptions.css'
// IMPORTING DATA FROM data.js 
import {fashionHeading,homeFurniture, essentials, kids, menBottomWear, menFootWear, menTopWear, womenEthnic, womenFootWear, womenWestern, hrParentData, watchessAndAcces } from "./data"
import {electronicsHeading, camerasAndAccess2, camerasAndAccess3, camerasAndAccess4, camerasAndAccess5, camerasAndAccess6, camerasAndAccess7, camerasAndAccess8, camerasAndAccess9, camerasAndAccess10, camerasAndAccess11, camerasAndAccess12, camerasAndAccess13, camerasAndAccess14, camerasAndAccess15} from "./data"
// IMPORTING DATA FROM data.js END 

function App() {
let [firstFinalData, setfirstFinalData] = useState([])
let [secondFInalData, setSecondFinalData]=useState([]);

let secondFInalDataRef =useRef(null)

let [id, setId]=useState();
let [secondOptions, setSecondOptions] = useState([])


let changeFirstDat =(selectedItem)=>{
  setfirstFinalData([])    //flushing previous data
  setSecondFinalData([])
  if(selectedItem.target.className==="bar2"){   //If Bar 2
    secondFInalDataRef.current.style.left="34%";
    setSecondOptions([
      menTopWear,
      menBottomWear,
      womenEthnic,
      womenWestern,
      menFootWear,
      womenFootWear,
      watchessAndAcces,
      kids,
      essentials
    ])
    setfirstFinalData(fashionHeading)

}
else if(selectedItem.target.className==="bar3"){
  secondFInalDataRef.current.style.left="44%";
  setfirstFinalData(electronicsHeading)
  setSecondOptions([
    camerasAndAccess2,
    camerasAndAccess3,
    camerasAndAccess4,
    camerasAndAccess5,
    camerasAndAccess6,
    camerasAndAccess7,
    camerasAndAccess8,
    camerasAndAccess9,
    camerasAndAccess10,
    camerasAndAccess11,
    camerasAndAccess12,
    camerasAndAccess13,
    camerasAndAccess14,
    camerasAndAccess15,
  ])
}
else if(selectedItem.target.className==="bar4"){
  secondFInalDataRef.current.style.left="54%";
  setfirstFinalData(homeFurniture)
  setSecondOptions([
    camerasAndAccess2,
    camerasAndAccess7,
    camerasAndAccess8,
    camerasAndAccess9,
    camerasAndAccess10,
    camerasAndAccess11,
    camerasAndAccess12,
    camerasAndAccess13,
    camerasAndAccess14,
    camerasAndAccess15,
  ])
}
else if(selectedItem.target.className==="bar7"){
  secondFInalDataRef.current.style.left="64.5%";
  setfirstFinalData(homeFurniture)
  setSecondOptions([
    camerasAndAccess10,
    camerasAndAccess11,
    camerasAndAccess12,
    camerasAndAccess13,
    camerasAndAccess2,
    camerasAndAccess7,
    camerasAndAccess8,
    camerasAndAccess9,
    camerasAndAccess14,
    camerasAndAccess15,
  ])
}
else if(selectedItem.target.className==="bar8"){
  secondFInalDataRef.current.style.left="74.5%";
  setfirstFinalData(homeFurniture)
  setSecondOptions([
    camerasAndAccess10,
    camerasAndAccess11,
    camerasAndAccess12,
    camerasAndAccess13,
    camerasAndAccess2,
    camerasAndAccess7,
    camerasAndAccess8,
    camerasAndAccess9,
    camerasAndAccess14,
    camerasAndAccess15,
  ])
}  
}
// Hide first options if user hovered on HorizontalBox 
let removeFirstOptions =(e)=>{
  // setSecondOptions([])
e.target.className==='HorizontalBar' && setfirstFinalData([])
}

// showing second data after hovering on first column op[tions ]


var getId = (e)=>{
    setId(e.target.id)
    if(id != '' && id != NaN && id != null && secondOptions != undefined){
      setSecondFinalData(secondOptions[id])
  }
}

let hideSecondData =(e)=>{
setSecondFinalData([])
}



  return (
    <>

      <div className="HorizontalBar" onMouseMove={removeFirstOptions}>
{/* HR  */}
{
  hrParentData.map((hrItems, index)=>{
    return(
      <>
      <div 
      key={{index}}
      onMouseEnter={changeFirstDat}
          className={`hrParent ${'bar'+index}`}
          style={{width: '100%' }}
        >
        <div className={`imageAndPara ${'bar'+index}`}>
          <img src={hrItems.img} className={`${'bar'+index}`}/>
          <p className={`${'bar'+index}`} style={{textAlign:"center"}} >{hrItems.name}</p> 
          {hrParentData[index].options ==='yes'? <IoIosArrowForward className='arrow' style={{width:'100%'}}></IoIosArrowForward>:null
          }
        </div>

        {/* first data fater hover */}
  <div className={`firstData ${'firstData'+index}`} onMouseMove={getId}>
{
  firstFinalData.map((elem, index2)=>{
  return(
    <>
      <p id={`${index2}`}>{elem.name}</p>
    </>
  )
})
}
    </div>
  
        </div>
{/* ----------- */}
      </>
      
    )
  })
  
}

{/* UPper is finished  */}

<div className='secondData' ref={secondFInalDataRef} onMouseLeave={hideSecondData}>
      {
secondFInalData.map((elem)=>{
          return(

          <>
            <p key={elem}>{elem.name}</p>
          </>
          )
        })
      }
    </div>






























      </div>

    </>
  )
}

export default App