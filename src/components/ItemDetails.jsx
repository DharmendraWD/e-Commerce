import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import userContext from './context/Context'
import ExploreItems from './ExploreItems'
import Heading from './Heading'
import HorizontalBarOptions from './TopOptionBar/HorizontalBarOptions'

function ItemDetails() {
    let {id} = useParams()
const value = useContext(userContext)
const [newValue, setNewValue] = useState(value.exploreItems[id].priceBeforeDisc)
const [exploreItem2, setexploreItem2] = useState(value.exploreItems)
const [selectedItems, setSelectedItems] = useState(1)

// |||||||||||Keeps the exact first Price value constant |||||||||||||||||
const [exactPriceOneItem, setexactPriceOneItem] = useState(value.exploreItems[id].priceBeforeDisc)
useEffect(() => {
    setexactPriceOneItem(value.exploreItems[id].priceBeforeDisc)
})
// |||||||||||Keeps the exact first Price value constant code END |||||||||||||||||



// Increment decrement items and changes in price 
const handleincrement = (e) => {
    if (e) {
        if (e.target.innerText === "+") {
            setNewValue(prevValue => prevValue + exactPriceOneItem);
            setSelectedItems(selectedItems+1)
        } else {
            if(newValue!=exactPriceOneItem){
                setNewValue(prevValue => prevValue - exactPriceOneItem);
                setSelectedItems(selectedItems-1)
            }
        }
    }
}

useEffect(() => {
    // Deep copy the exploreItems array
    const updatedItems = JSON.parse(JSON.stringify(value.exploreItems));

    // Update the priceBeforeDisc of the item at the specified id
    updatedItems[id].priceBeforeDisc = newValue;

    // Set the state with the updated array
    setexploreItem2(updatedItems);
}, [newValue]); // useEffect will trigger whenever newValue changes

return (
      <>

      <div className="text-white"></div>
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xxl-2 lh-1 bg-white">
      {/* first half */}
      <div className="col ">
        <div className=" flex justify-evenly items-center">
          {/* product display part */}
          <div className="col-4 product_image_display_part" id="product_image_display_part" style={{ overflow: 'scroll' }}>
            {/* image lists */}
              <img className="w-75 feature_img" src={value.exploreItems[id].img1} />
            {/* image lists */}
          </div>
          <div className="col-8 flex h-[80vh] w-[80%]" style={{ overflow: 'hidden' }}>
            {/* image display panel */}
            <img src={value.exploreItems[id].img1} className="w-[300px] overflow-hidden m-auto " id="display" />
            {/* image display panel */}
          </div>
          {/* product display part */}
        </div>
      </div>
      {/* first half */}
      {/* second half */}
      <div className="col">
        <div className="pt-3 pb-1">
          {/* progress bar */}
          <div className="progress">
            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated fw-bold text-dark rounded" role="progressbar" style={{ width: '19.05%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
              <div style={{ position: 'absolute' }}>{value.exploreItems[id].soldPercentage}</div>
            </div>
          </div>
          {/* progress bar */}
          {/* Product Details */}
          <div className="h3">{value.exploreItems[id].name}</div>
          <div className="product-type text-uppercase">Collage Bags</div>
          {/* Product Details */}
          <div>Product Id: {value.exploreItems[id].productCode}</div>
          <div>We have: {value.exploreItems[id].availablePiece} Items</div>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xxl-2 lh-1 ">
          <div className="col">
            {/* reviews part */}
            <div className="fw-bold col-12 px-0 py-3 fs-5">
              <small className="text-danger" id="review_stars">
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
              </small>
              <span id="average_rating_top"></span> | <span id="total_review_top"></span> Reviews
              <small><i className="bi bi-patch-check-fill text-success"></i></small>
            </div>
            {/* reviews part */}
            {/* product variety part */}
            <hr className="m-0" />
            <div className="d-flex justify-content-between align-items-baseline product-form__option-info">
              <div className="p-2">
                <span className="text-capitalize product-form__option-name"></span>
                <span id="option-template--14357041315938__main--4460669370466-1-value" className="product-form__option-value pt-3 pb-3">
                  <a style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                    Color : <span id="d_color_name">Black</span>
                  </a>
                </span>
              </div>
              <img className="varnt-drop h-100" /> <i className="bi bi-caret-down-fill"></i>
            </div>
            <div className="collapse multi-collapse show" id="multiCollapseExample1">
              <div className="d-flex flex-wrap" id="varient_images">
                <button className="col-4 btn product_varient" type="button" data-pv_id="3" data-color="black" data-folder_path="assets/images/products/Fashion Nylon Large Capacity School College Backpack Unisex/black/">
                  <img className="w-100" src="assets/images/products/Fashion Nylon Large Capacity School College Backpack Unisex/Sd0488138771848eba896dea019cf07b55.jpg_750x750.jpg_.jpg" />
                </button>
              </div>
            </div>
            <hr />
            {/* product variety part */}
          </div>
          <div className="col">
            {/* product price and order part */}
            <div className="card col-auto p-2 m-1" style={{ background: '#efefef', fontSize: '15px' }}>
              {/* row 1 PRICE*/}
              <div className="d-flex flex mt-2">
                <div className="pe-1 col-6" style={{ color: '#616161' }}>
                  {/* <del>{value.exploreItems[id].priceBeforeDisc* value.exploreItems[id].discPercentage/100}</del> */}
                  <del>₹: {exploreItem2[id].priceBeforeDisc}</del>
                  <br />
                  <div className="custom-saved-price" style={{ letterSpacing: '-0.045em', color: '#00C68C', fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>Save: ₹: 
                  {exploreItem2[id].priceBeforeDisc*exploreItem2[id].discPercentage/100}
                  </div>
                </div>
                <div className="fw-bold col-6" style={{ color: 'red' }}>₹: 
                  {exploreItem2[id].priceBeforeDisc-(exploreItem2[id].priceBeforeDisc*exploreItem2[id].discPercentage)/100} 
                  <i className="bi bi-lightning-charge-fill" style={{ color: '#fbc50b' }} />
                  <br />
                  <div className="inclusive fw-normal" style={{ color: '#616161' }}>Inclusive of all taxes</div>
                </div>
              </div>
              {/* row 1 */}
              {/* row 2 STOCK*/}
              <div className="d-flex justify-content-between mt-2 py-2" style={{ background: '#DCDCDC' }}>
                <div className="fw-normal m-auto rounded"><strong style={{ color: 'rgb(2, 136, 96)', visibility: 'visible' }}>Available In Stock: {value.exploreItems[id].availablePiece}</strong></div>
              </div>
              {/* row 2 */}
              {/* row 3 COUNTER*/}
              <div className="col-12 m-auto text-center">
                <div className="d-inline-flex">
                  <div className="v-counter flex justify-center items-center mr-[11px] text-[20px]">
                    {/* <input type="button" className="minusBtn" value="-" onClick=/> */}
                    <p className='minusBtn cursor-pointer p-[3px]' onClick={handleincrement}>-</p>
                    <input type="text" size="25" value={selectedItems} id="order_count" readOnly className="count fs-5 w-[50px] text-center" style={{ color: 'red' }} />
                    {/* <input type="button" className="plusBtn" value="+" onClick={handleincrement} /> */}
                    <p className='plusBtn cursor-pointer p-[3px]' onClick={handleincrement}>+</p>
                  </div>
                  <div className="pt-3 fw-bold">Units</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second half */}
    </div>
    <Heading></Heading>
    <HorizontalBarOptions></HorizontalBarOptions>
    <ExploreItems theme={value.theme} exploreItems={value.exploreItems} ></ExploreItems>
    </>
  )
}

export default ItemDetails