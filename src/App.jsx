import { useState } from 'react'
import Slideshow from "./components/Slideshow"
import NavigationBar from "./components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';
import Heading from "./components/Heading"
import ExploreItems from './components/ExploreItems';
import SoldProgressBar from './components/SoldProgressBar';


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
]




  return (
    <>
      <Router>

        <NavigationBar navigationBarOptions={navigationBarOptions} dropDown={dropDown}></NavigationBar>
        <Slideshow></Slideshow>
<Heading explore={explore}></Heading>

<ExploreItems exploreItems={exploreItems}></ExploreItems>
      </Router>
    </>
  )
}

export default App
