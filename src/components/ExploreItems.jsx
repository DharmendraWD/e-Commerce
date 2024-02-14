import { MdDiscount } from "react-icons/md";
import { Link } from 'react-router-dom'
import "./ExploreItems.css"

import AddToCart from './AddToCart'
import SoldProgressBar from "./SoldProgressBar";

const ExploreItems =({exploreItems})=>{

// To ADD COMMA IN ITEMS PRICE AND "NPR" BEFOR PRICE VALUE 
const addCommaAndNPR = new Intl.NumberFormat("en-us", {
  currency: "NPR", // Nepalese Rupees
  style: "currency",
  notation: "standard"
});

let addPercentage = new Intl.NumberFormat("en-us", {
  currency: "USD", 
  style: "percent",
})





    return (
      <div className="exploreItemParent d-grid" style={{
        gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",
        gridGap:"8px"
      }}>
      <>
{
  exploreItems.map((items, index)=>{
    return(
<div className={`font-normal exploreItemParentChild mb-2 me-2 col-sm-5 product-wrapper product-card-size text-start ${items.discPercentage ? '' : 'discount-padding'}`} 
style={{backgroundColor:"#e3e3e3",
 width:"100%",
display:"flex",
flexDirection:"column",
justifyContent:"space-between",
 }}>


{/* SHOWING DISCOUNT ON TOP IF GIVEN  */}
<div className="col-6 discount">
{items.discPercentage ?   /* SHOW DISCOUNT ONLY WHEN AVAILABLE */
<>
<MdDiscount></MdDiscount>    {/*DISCOUNT ICON ON TOP */}
<span>{items.discPercentage}% Off</span>      {/*DISCOUNT PERCENTAGE */}
</>
: null}
</div>

{/* iMAGE OF iTEMS  */}
<div className="itemImage">
<Link to="" className="d-flex justify-content-center" 
data-aos="zoom-in" data-aos-duration="2000"><img src={items.img1} alt="" 
style={{
  width:"80%", 
  textAlign:"center",
  height:"12rem"
  }} />
  </Link>
</div>

{/* THIS DIV CONTAINS: ,items name price before discount, price after discount, add to cart button, sold preogressBar */}
<div className="itemName border border-2 rounded mb-2 bg-white p-1">
<span>{items.name.slice(0, 40)}</span>     {/* ITEM'S NAME */}
<hr style={{margin:"1px"}} />

         <div className="card-text" style={{marginBottom:"0px"}}>
 <div className="prices d-flex flex-row justify-content-around">
 
 {/* PRICE AFTER DISCOUNT */}
{items.discPercentage ? 
<>
<span className="" style={{color:"#F85606", fontWeight:"bold"}}>
{addCommaAndNPR.format(items.priceBeforeDisc -items.priceBeforeDisc*items.discPercentage/100).replace(/\.?0+$/, '')}
</span>  
</>
: <span className="" style={{color:"#F85606", fontWeight:"bold"}}>
{addCommaAndNPR.format(items.priceBeforeDisc).replace(/\.?0+$/, '')}
</span>  
}

{/* PRICE BEFORE DISCOUNT */}
{items.discPercentage ?
<span className=""> <s>{addCommaAndNPR.format(items.priceBeforeDisc).replace(/\.?0+$/, '')}</s>
</span>      
: null
}    </div>

{/* SHOW HOW MUCH DISCOUNT IS IN RUPEES IF AVAILABLE IF NOT THEN SHOW "WAITING FOR YOUR ORDER" */ }
{items.discPercentage ? <span
 style={{
  display:"block",
  textAlign:"center", 
  color:"#00cd00",
   fontWeight:"bold"}}
   >Save NPR {
items.priceBeforeDisc*items.discPercentage/100
  }</span> : <span 
  style={{display:"block",
   textAlign:"center", 
   color:"green"}}
    >Hurry Up! </span>   }

<AddToCart></AddToCart>
         </div>
 
 {/* SOLD PROGRESS BAR  */}
                <div className="progress" style={{position:"relative", marginTop:"6px", border:"1px solid"}}>
                {
               items.soldPercentage ? 
               <>
               <div
                   className="progress-bar bg-info"
                   role="progressbar"
                   style={{ width: '50%' }}
                   aria-valuenow="50"
                   aria-valuemin="0"
                   aria-valuemax="100"
                 ></div>
               
               
               
                 <span
                 className="progressBArLabel"
                 style={{
                   position: "absolute",
                   top: "50%",
                   left: "50%",
                   transform: "translate(-50%, -52%)",
                   fontWeight:"bold",
                   color:"black",
                   fontSize:".9rem"
                 }}
               >
               {items.soldPercentage}% Sold 
               </span> 
               </>
                :
                 <>
                 <span className="d-block text-center rounded rounded-bottom-1" 
                style={{
                 boxShadow:"0px 2px 4px 1px grey", 
                fontSize:".9rem",
                 color:"#7575ad",
                 fontWeight:"Bold",
                 width:"100%", 
                 position:"absolute",
                 top:"-4px"
                 }}>Not sold any Items yet</span> 
                 </>
                 }
               </div>
            

</div>
  

</div>
    )
  })
}
        </>
</div>
    )
}

export default ExploreItems;