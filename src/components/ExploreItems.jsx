import React from 'react'
import userContext from './context/Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import OnTopDiscount from './OnTopDiscount'
import AddToCart from './AddToCart'


import './css/ExploreItems.css'

function ExploreItems(props) {
  const value = useContext(userContext)

  // let data = props.exploreItems || props.lists;
  let { theme, exploreItems, addedTOCartItems } = props;

  // Determine which items to use based on the provided props
  const items = exploreItems || addedTOCartItems || [];


  // ADD TO CART AND REMOVE TO CART 
  let addC = "Add to Cart"
  let removeC = "Delete"

  return (
<>
<div className="itemParent">
{
  items.map((elem, index)=>{
return(
  <>


<Link Link to={`/ItemDetails/${elem.id}`} className="item" id={index} key={index} style={{boxShadow:theme==="dark-theme" ? '5px 5px 10px #011813':'white'}}>
<OnTopDiscount discPercentage = {elem.discPercentage}></OnTopDiscount>

<img src={elem.img1} alt="" />
<div className="itemTitle">

{/* ITEM SHORT NAME AND DETAILED NAME  */}

<p>{elem.shortName}</p>
<p>{elem.name.slice(0, 40)}</p>


{/* ITEM SOLD PERCENTAGE AND DISCOUNT PERCENTAGE  */}
<div className="itemSoldPercentage spaceEvenly">
{elem.soldPercentage && <p>{elem.soldPercentage+"% Sold"}</p>}
{/* If discount given then Show  */}
{elem.discPercentage ?
<>
<p>{elem.discPercentage+"%"} <span> <b> Off</b></span> </p> 
</>: <p> <b>Limited </b></p> }
</div>

{/* ITEM PRICE BEFORE AND AFTER DISCOUNT  */}
<div className="itemPrice spaceEvenly">

{elem.discPercentage ?
<>
<p><s> Rs: {elem.priceBeforeDisc} </s> </p>
 <p> <b className='text-success'>Rs: {elem.priceBeforeDisc-elem.priceBeforeDisc*elem.discPercentage/100}</b></p>
 </>
 :<b><p className='text-success'> {"Rs: "+elem.priceBeforeDisc} </p></b>}
</div>

{/* IF DISCOUNT IS GIVEN THEN SHOW HOW MUCH IS, IF NOT THEN SHOW DELIVERY FREE  */}
{elem.discPercentage ? <p>Save <b> <span style={{color:"#01b301"}}> {elem.priceBeforeDisc*elem.discPercentage/100} </span></b>on Discount</p> : <p> <b> Delivery Free</b></p>}
{
  exploreItems ? <AddToCart addC={addC}></AddToCart>:<AddToCart addC={removeC}></AddToCart>
}
</div>
</Link>















  </>

)
})
}
</div>
</>
  )


}

export default ExploreItems