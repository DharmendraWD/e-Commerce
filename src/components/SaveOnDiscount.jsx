

const SaveOnDiscount = ({ discPercentage, priceBeforeDisc }) => {
    return (

        // IF DISCOUNT AVAILABLE SHOW "SAVED MONEY DUE TO DISCOUNT"
        <div className="SavedMoney">
            {
                discPercentage ? <span
                style={{
                    display: "block",
                    textAlign: "center",
                    color: "#00cd00",
                    fontWeight: "bold"
                }}
            >Save NPR {
                    priceBeforeDisc * discPercentage / 100
                }</span>
                // IF DISCOUNT nNOT AVAILABLE SHOW "HURRY UP"
                : <span
                    style={{
                        display: "block",
                        textAlign: "center",
                        color: "green"
                    }}
                >Hurry Up! </span>
                }
        </div>
    )
}

export default SaveOnDiscount;