import React, { useContext } from 'react'
import userContext from './context/Context'
import ExploreItems from './ExploreItems'
import "./css/AddedInCart.css"

function AddedInCart() {
const value = useContext(userContext)

  return (
<>
{

    <>
<div className="AddedItem" style={{background:"red", margin:"14 0", textAlign:"center", minHeight:"100vh"}}>
<h3>Your Added Cart Appears Here</h3>
<h4>You have added <span style={{color:"green"}}>{value.item.length}</span> Item</h4>
<ExploreItems addedTOCartItems={value.item}></ExploreItems>
</div>
    </>

}











    </>
  )}

export default AddedInCart