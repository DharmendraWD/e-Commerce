

const ItemsPrice = ({priceBeforeDisc, discPercentage}) => {

// To ADD COMMA IN ITEMS PRICE AND "NPR" BEFOR PRICE VALUE 
const addCommaAndNPR = new Intl.NumberFormat("en-us", {
    currency: "NPR", // Nepalese Rupees
    style: "currency",
    notation: "standard"
  });
  


    return (
        <>
          {/* if there is discount on items  */}
                <div className="price d-flex justify-content-evenly">
            {discPercentage ?      
                <>
                      {/* PRICE AFTER DISCOUNT */}
                    <span className="" style={{ color: "#F85606", fontWeight: "bold" }}>
                        {addCommaAndNPR.format(priceBeforeDisc - priceBeforeDisc * discPercentage / 100).replace(/\.?0+$/, '')}
                    </span>
                </>               
                : /* if there is no discount on items then show priceBeforeDiscount which is actual price */
                 <span className="" style={{ color: "#F85606", fontWeight: "bold" }}>
                    {addCommaAndNPR.format(priceBeforeDisc).replace(/\.?0+$/, '')}
                </span>
            }

            {/* PRICE BEFORE DISCOUNT */}
            {discPercentage ?
                <span className=""> <s>{addCommaAndNPR.format(priceBeforeDisc).replace(/\.?0+$/, '')}</s>
                </span>
                : null
            }
</div>
        </>
    )
}

export default ItemsPrice;