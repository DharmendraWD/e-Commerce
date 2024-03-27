
import { Link } from 'react-router-dom'
import "./Universal.css"




const ExploreItems =({itemImage, theme})=>{

    return (
  
<>





 {/* iMAGE OF iTEMS   */}
<div className="itemImage">
<Link to="" className="d-flex justify-content-center" 
data-aos="zoom-in" data-aos-duration="2000"><img src={itemImage} alt="" 
style={{
  width:"80%", 
  textAlign:"center",
  height:"12rem"
  }} />
  </Link>
</div>


<div className={`itemName border border-2 rounded mb-2 bg-white p-1`} style={{opacity:theme ==='dark-theme' && '8%'}}>


         <div className="card-text" style={{marginBottom:"0px"}}>
 <div className="priceOfItems">
 

   </div>




         </div>
     

</div>
  



 {/* </div> */}

</>


    )
}


export default ExploreItems;