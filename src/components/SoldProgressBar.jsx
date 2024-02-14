

const SoldProgressBar = ({ discountPercentage }) => {
    return (
      <>
 <div className="progress" style={{position:"relative", marginTop:"6px", border:"1px solid"}}>
                {
               discountPercentage ? 
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
               {discountPercentage}% Sold 
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
      </>
    );
  };
  
export default SoldProgressBar;