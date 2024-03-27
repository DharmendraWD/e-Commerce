import { useState, useEffect } from 'react'
import Slideshow from "./components/Slideshow"
import NavigationBar from "./components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';
import Heading from "./components/Heading"
import ExploreItems from './components/ExploreItems';

import './components/Universal.css'

import AddToCart from './components/AddToCart'
import SoldProgressBar from "./components/SoldProgressBar";
import ItemsPrice from "./components/ItemsPrice";
import ItemsName from './components/ItemsName'
// import HrLine from './components/HrLine'
import SaveOnDiscount from './components/SaveOnDiscount'
import OnTopDiscount from './components/OnTopDiscount'
import HorizontalBarOptions from './components/TopOptionBar/HorizontalBarOptions'
import Authenticate from './components/authenticate/Authenticate'

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)
const navigationBarOptions =[
  {
    name:"Category",
  },
  {
    name:"Daily Deal",
  },
  {
    name:"OfferZone",
  },
  // {
  //   name:"More",
  // },
]
const dropDown =[
  {
    name:"Delivery",
  },
  {
    name:"Blogs",
  },
  {
    name:"About",
  },
]
// Explorer Best 
let explore = "Explore BestSellers";
let NewLaunches = "New Launches";

// Items 
const exploreItems =[
  {
name: "Fashion Style New Laptop Backpack Collage Bag School Bag Travel Bag | Bags | Laptop Bags For Men And Women", 
shortName:"COLLAGE BAGS",
productCode:"0121",
stock:"1pcs",
color:"Black and Grey",
img1:"https://arrive4you.com/assets/images/products/S96aa89e52a6f4feeb31fa974544b9542s.jpg_750x750.jpg_.png",
img2:"",
soldPercentage:13,
discPercentage:37,
priceBeforeDisc:1400,
  }, 
  {
    name: "Fashion Nylon Large Capacity School College Backpack Unisex", 
    shortName:"player",
    productCode:"013221",
    stock:"11pcs",
    color:"Black and Grey",
    img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
    img2:"",
    // discPercentage:66,
    soldPercentage:38,
    priceBeforeDisc:1300,
  } ,
  {
    name: "Large Capacity School College Backpack Unisex", 
    shortName:"player",
    productCode:"0132321",
    stock:"11pcs",
    color:"Black and Grey",
    img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
    discPercentage:66,
    img2:"",
    // soldPercentage:99,
    priceBeforeDisc:300,
      }, 
  {
    name: "Large Capacity School College Backpack Unisex", 
    shortName:"player",
    productCode:"0132321",
    stock:"11pcs",
    color:"Black and Grey",
    img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
    discPercentage:66,
    img2:"",
    // soldPercentage:99,
    priceBeforeDisc:300,
      }, 
  {
    name: "Large Capacity School College Backpack Unisex", 
    shortName:"player",
    productCode:"0132321",
    stock:"11pcs",
    color:"Black and Grey",
    img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
    discPercentage:66,
    img2:"",
    // soldPercentage:99,
    priceBeforeDisc:300,
      }, 
  {
    name: "Large Capacity School College Backpack Unisex", 
    shortName:"player",
    productCode:"0132321",
    stock:"11pcs",
    color:"Black and Grey",
    img1:"https://arrive4you.com/assets/images/products/S96aa89e52a6f4feeb31fa974544b9542s.jpg_750x750.jpg_.png",
    discPercentage:6,
    img2:"",
    // soldPercentage:99,
    priceBeforeDisc:300,
      }, 
  {
    name: "Large Capacity School College Backpack Unisex", 
    shortName:"player",
    productCode:"0132321",
    stock:"11pcs",
    color:"Black and Grey",
    img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
    discPercentage:66,
    img2:"",
    // soldPercentage:99,
    priceBeforeDisc:300,
      }, 
]

// DARK MODE 
const [theme, setTheme]= useState("light-theme");
  const toggleDarkMode = () => {
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }
    else{
      setTheme("dark-theme")
    }
  };
useEffect(()=>{
  document.body.className = theme;
}, [theme]);


// GETTING CLICKED ITEM ALL VALUES 
const itemPage = (event) => {
  const childrenValues = Array.from(event.currentTarget.children).map((child) => {
    return child.innerText || child.value || '';
  });
};

  return (
    <>
    <BrowserRouter>
<Routes>
    <Route path="/" element={
     <>

         <NavigationBar 
        navigationBarOptions={navigationBarOptions} 
        dropDown={dropDown}
        toggleDarkMode={toggleDarkMode}
        theme={theme}
        ></NavigationBar>
        <Slideshow></Slideshow>
      <HorizontalBarOptions></HorizontalBarOptions>
<Heading explore={explore}></Heading>

<div className={`exploreItemParent d-grid`}
 style={{
        gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr",
        gridGap:"8px"
      }}>

{exploreItems.map((items, index) => (

  <div key={"k"+index} className={`font-normal exploreItemParentChild mb-2 me-2 col-sm-5 product-wrapper product-card-size text-start ${items.discPercentage ? '' : 'discount-padding'}`} 
onClick={itemPage}
 style={{flexDirection:'column', display:'flex', justifyContent:'space-between', width:'100%', boxShadow:'0px 2px 8px 0px' }}
 >


  <OnTopDiscount 
  onTopDiscountValue={items.discPercentage}
  theme={theme}
  ></OnTopDiscount>

    <ExploreItems
      itemImage={items.img1}
      exploreItems={items}  // Pass the current item, not the entire array
      discPercentage={items.discPercentage}  // Use items.discPercentage instead of exploreItems.discPercentage
      theme={theme}
    />
    {/* ITEMS NAME  */}
    <ItemsName itemName={items.name}
    ></ItemsName>
    {/* ITEMS PRICE  */}
    <ItemsPrice priceBeforeDisc={items.priceBeforeDisc} discPercentage={items.discPercentage}></ItemsPrice>
    {/* SAVE ON DISCOUNT IN NPR  */}
    <SaveOnDiscount discPercentage ={items.discPercentage} priceBeforeDisc ={items.priceBeforeDisc}></SaveOnDiscount>
{/* ADD TO CART  */}
<AddToCart></AddToCart>
    {/* SOLD PROGRESS BAR  */}
    <SoldProgressBar discPercentage = {items.discPercentage}></SoldProgressBar>
  </div>
))}

  </div>
     </>
    }/> 
    {/* <Route path="/member" element= {Authenticate} /> */}
    <Route path="/member" element= <Authenticate></Authenticate> />
</Routes>


      {/* <Router> */}
       
  {/* </div> */}
      {/* </Router> */}
      </BrowserRouter>
    </>
  )
}

export default App
