import { MdDiscount } from "react-icons/md";

const OnTopDiscount = ({onTopDiscountValue})=>{

    {/* SHOWING DISCOUNT ON TOP IF GIVEN  */}
    return (
<div className="col-6 discount">
{onTopDiscountValue ?   /* SHOW DISCOUNT ONLY WHEN AVAILABLE */
<>
<MdDiscount></MdDiscount>    {/*DISCOUNT ICON ON TOP */}
<span>{onTopDiscountValue}% Off</span>      {/*DISCOUNT PERCENTAGE */}
</>
: null}
</div>
    )
}

export default OnTopDiscount;