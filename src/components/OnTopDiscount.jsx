import { MdDiscount } from "react-icons/md";
import userContext from './context/Context';
import { useContext } from 'react';

// value.exploreItems.map
const OnTopDiscount = ({discPercentage})=>{
    {/* SHOWING DISCOUNT ON TOP IF GIVEN  */}
    
    const value = useContext(userContext);

    return (
        
        <>

<div className="col-6 discount text-black"
style={{backgroundColor: value.theme === 'light-theme' ? 'yellow' : '#4CAF50'}}
>
{discPercentage ?  <><MdDiscount></MdDiscount>  <span>{discPercentage}% Off</span>      {/*DISCOUNT PERCENTAGE */}
</>
: <span>Hurry Up!</span>}
</div>
</>
    )
}
export default OnTopDiscount;


