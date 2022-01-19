import React from "react";
import Trashicon from "./images/trash-solid.svg";

function Savedcard(props)
{

   function handleChange(){
       
      props.onDelete(props.id);

   }
 

    return (
  

        <div className="savedcard" >
   
           <div className="card-header">
               <img className="card-header-logo" src={props.savedimg} />
               <h6 className="card-title">{props.title} Rover </h6>
           </div>
           
           <img className="card-img" src={props.savedimg} alt="No img"/>
           <div className="savedcard-block1">
                  <h6><strong>Camera :</strong> {props.camera}</h6>
                  <i onClick={handleChange} class="fa fa-trash"></i>
           </div> 
               
               
         
        </div>
   
     );

}


export default Savedcard;