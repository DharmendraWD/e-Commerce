import React, {useState, useEffect } from "react";
import context from "./Context";
// import './../Universal.css'


const UserContextProvider = ({children}) =>{
    const navigationBarOptions =[
        {
          name:"Category",
          to:"/Category"
        },
        {
          name:"OfferZone",
          to:"/"
        },
        {
          name:"Contact Us",
          to:"/info/Contact"
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
      // const exploreItems =[
      // //   {
      // // name: "Fashion Style New Laptop Backpack Collage Bag School Bag Travel Bag | Bags | Laptop Bags For Men And Women", 
      // // shortName:"COLLAGE BAGS",
      // // productCode:"0121",
      // // stock:"1pcs",
      // // color:"Black and Grey",
      // // img1:"https://arrive4you.com/assets/images/products/S96aa89e52a6f4feeb31fa974544b9542s.jpg_750x750.jpg_.png",
      // // img2:"",
      // // soldPercentage:13,
      // // discPercentage:37,
      // // priceBeforeDisc:1400,
      // // productCode:"112",
      // // availablePiece:"29",
      // // id:0,
      // //   }, 
      // //   {
      // //     name: "Fashion Nylon Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"013221",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
      // //     img2:"",
      // //     discPercentage:66,
      // //     soldPercentage:38,
      // //     priceBeforeDisc:1300,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     id:1,
      // //     forMen:"yes",
      // //     forWomen:"yes",
      // //     isAccess:"yes",
      // //   } ,
      // //   {
      // //     name: "Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"0132321",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
      // //     discPercentage:36,
      // //     img2:"",
      // //     // soldPercentage:99,
      // //     priceBeforeDisc:300,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     id:2,
      // //     forWomen:"yes",
      // //       }, 
      // //   {
      // //     name: "Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"0132321",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
      // //     discPercentage:10,
      // //     img2:"",
      // //     // soldPercentage:99,
      // //     priceBeforeDisc:300,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     id:3,
      // //     forWomen:"yes",
      // //       }, 
      // //   {
      // //     name: "Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"0132321",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
      // //     discPercentage:66,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     img2:"",
      // //     // soldPercentage:99,
      // //     priceBeforeDisc:300,
      // //     id:4,
      // //       }, 
      // //   {
      // //     name: "Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"0132321",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/S96aa89e52a6f4feeb31fa974544b9542s.jpg_750x750.jpg_.png",
      // //     discPercentage:6,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     img2:"",
      // //     // soldPercentage:99,
      // //     priceBeforeDisc:30000,
      // //     id:5,
      // //       }, 
      // //   {
      // //     name: "Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"0132321",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
      // //     discPercentage:66,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     img2:"",
      // //     // soldPercentage:99,
      // //     priceBeforeDisc:300,
      // //     id:6,
      // //       }, 
      // //   {
      // //     name: "Large Capacity School College Backpack Unisex", 
      // //     shortName:"player",
      // //     productCode:"0132321",
      // //     stock:"11pcs",
      // //     color:"Black and Grey",
      // //     img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
      // //     discPercentage:36,
      // //     productCode:"112",
      // //     availablePiece:"29",
      // //     img2:"",
      // //     // soldPercentage:99,
      // //     priceBeforeDisc:8000,
      // //     id:6,
      // //       }, 
      // ]
      
const [exploreItems, setExploreItems] = useState([
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
    productCode:"112",
    availablePiece:"29",
    id:0,
      }, 
      {
        name: "Fashion Nylon Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"013221",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
        img2:"",
        discPercentage:66,
        soldPercentage:38,
        priceBeforeDisc:1300,
        productCode:"112",
        availablePiece:"29",
        id:1,
        forMen:"yes",
        forWomen:"yes",
        isAccess:"yes",
      } ,
      {
        name: "Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"0132321",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
        discPercentage:36,
        img2:"",
        // soldPercentage:99,
        priceBeforeDisc:300,
        productCode:"112",
        availablePiece:"29",
        id:2,
        forWomen:"yes",
          }, 
      {
        name: "Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"0132321",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
        discPercentage:10,
        img2:"",
        // soldPercentage:99,
        priceBeforeDisc:300,
        productCode:"112",
        availablePiece:"29",
        id:3,
        forWomen:"yes",
          }, 
      {
        name: "Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"0132321",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
        discPercentage:66,
        productCode:"112",
        availablePiece:"29",
        img2:"",
        // soldPercentage:99,
        priceBeforeDisc:300,
        id:4,
          }, 
      {
        name: "Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"0132321",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/S96aa89e52a6f4feeb31fa974544b9542s.jpg_750x750.jpg_.png",
        discPercentage:6,
        productCode:"112",
        availablePiece:"29",
        img2:"",
        // soldPercentage:99,
        priceBeforeDisc:30000,
        id:5,
          }, 
      {
        name: "Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"0132321",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
        discPercentage:66,
        productCode:"112",
        availablePiece:"29",
        img2:"",
        // soldPercentage:99,
        priceBeforeDisc:300,
        id:6,
          }, 
      {
        name: "Large Capacity School College Backpack Unisex", 
        shortName:"player",
        productCode:"0132321",
        stock:"11pcs",
        color:"Black and Grey",
        img1:"https://arrive4you.com/assets/images/products/52a2980eb9b34dd0e3b075f816068328.jpg_750x750.jpg_.jpg",
        discPercentage:36,
        productCode:"112",
        availablePiece:"29",
        img2:"",
        // soldPercentage:99,
        priceBeforeDisc:8000,
        id:6,
          }, 
])

const [cartNumber, setCartNumber] = useState(1)



const [addedCartItemArray, setAddedCartItemArray] = useState([])
const [item, setitem] = useState([])
const addRemoveFromCart =(e)=>{
 if(e.target.innerTex == "Remove From Cart"){
 }
// CHECK IF CLICKED ON "DELETE CART" OR "ADD CART"
if(e.target.textContent === "Add to Cart" ){
  setCartNumber(cartNumber+1)
  // setAddedCartItemArray([e.target.parentElement.parentElement]);
let itemId = e.target.parentElement.parentElement.id;
setitem(prevItems => [...prevItems, exploreItems[itemId]]);

// CHANGE HOMEPAGE CART TEXT CONTENT 
  e.target.innerText="Remove From Cart"

}
else if(e.target.textContent=="Delete"){
  let itemId =e.target.parentElement.parentElement.id;
  item.splice(itemId, 1); // Remove 1 element starting from index 0
  let newItemAfterDelete = [...item]
  console.log(newItemAfterDelete); 
  setitem(newItemAfterDelete)
}

}

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
      
      




        return (
            <context.Provider value={{navigationBarOptions, dropDown, toggleDarkMode,theme, explore, exploreItems, cartNumber, setCartNumber, addRemoveFromCart, addedCartItemArray, item}}>
                {children}
            </context.Provider>
        )
}
export default UserContextProvider
// ds