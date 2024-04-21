





{exploreItems.map((items, index) => (

  <div key={"k"+index} className={`font-normal exploreItemParentChild mb-2 me-2 col-sm-5 product-wrapper product-card-size text-start ${items.discPercentage ? '' : 'discount-padding'}`} 
onClick={itemPage}
 style={{flexDirection:'column', display:'flex', justifyContent:'space-between', width:'100%', boxShadow:'0px 2px 8px 0px' }}
 >




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

  {/* </div> */}