import { useState, useEffect } from 'react'
import Slideshow from "./components/Slideshow"
import NavigationBar from "./components/NavBar"
import { BrowserRouter as Router } from 'react-router-dom';
import Heading from "./components/Heading"
import ExploreItems from './components/ExploreItems';



// import AddToCart from './components/AddToCart'
import SoldProgressBar from "./components/SoldProgressBar";
import ItemsPrice from "./components/ItemsPrice";
import ItemsName from './components/ItemsName'
// import HrLine from './components/HrLine'
import SaveOnDiscount from './components/SaveOnDiscount'
import OnTopDiscount from './components/OnTopDiscount'


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
const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

// MAKING DARK BACKGROUND IN BODY 
useEffect(()=>{
  if(isDarkMode){
    
    document.body.style.transition = 'background-color 0.5s'
    document.body.style.backgroundColor =  'black';
    document.body.classList.add("darkMode")
  }
else{
  document.body.style.transition = 'background-color 0.5s'
  document.body.style.backgroundColor =  'white';
  document.body.classList.remove("darkMode")
}

  // cleanup function to remove style component
  return ()=>{
    document.body.style.backgroundColor = '';
    document.body.style.transition = '';
  };
}, [isDarkMode])

// GETTING CLICKED ITEM ALL VALUES 
const itemPage = (event) => {
  const childrenValues = Array.from(event.currentTarget.children).map((child) => {
    return child.innerText || child.value || '';
  });

  console.log('MainDiv clicked. Children Values:', childrenValues);
};

  return (
    <>
      <Router>

        <NavigationBar 
        navigationBarOptions={navigationBarOptions} 
        dropDown={dropDown}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        ></NavigationBar>
        <Slideshow></Slideshow>
<Heading explore={explore}></Heading>

<div className={`exploreItemParent d-grid ${isDarkMode ? 'bgBlack' : ''}`}
 style={{
        gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",
        gridGap:"8px"
      }}>

{exploreItems.map((items, index) => (
  <div key={`k${index}`}>

  <div key={"k"} className={`font-normal exploreItemParentChild mb-2 me-2 col-sm-5 product-wrapper product-card-size text-start ${items.discPercentage ? '' : 'discount-padding'} ${isDarkMode ? 'bgBlack' : ''}`} 
onClick={itemPage}
 style={{flexDirection:'column', display:'flex', justifyContent:'space-between', width:'100%', boxShadow:'0px 2px 8px 0px' }}
 >

  <OnTopDiscount onTopDiscountValue={items.discPercentage}></OnTopDiscount>
    <ExploreItems
      itemImage={items.img1}
      exploreItems={items}  // Pass the current item, not the entire array
      discPercentage={items.discPercentage}  // Use items.discPercentage instead of exploreItems.discPercentage
      isDarkMode={isDarkMode}
    />
    {/* ITEMS NAME  */}
    <ItemsName itemName={items.name}
    ></ItemsName>
    {/* ITEMS PRICE  */}
    <ItemsPrice priceBeforeDisc={items.priceBeforeDisc} discPercentage={items.discPercentage}></ItemsPrice>
    {/* SAVE ON DISCOUNT IN NPR  */}
    <SaveOnDiscount discPercentage ={items.discPercentage} priceBeforeDisc ={items.priceBeforeDisc}></SaveOnDiscount>

    {/* SOLD PROGRESS BAR  */}
    <SoldProgressBar discPercentage = {items.discPercentage}></SoldProgressBar>
  </div>
  </div>
))}

  </div>
  {/* </div> */}
      </Router>
    </>
  )
}

export default App
