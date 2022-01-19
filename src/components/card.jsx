import React from "react";
import image from "./images/nasa.jpg";
import unlike from "./images/unlike.png";
import like from "./images/like.png";
import unbookmark from "./images/unbookmark.png";
import bookmark from "./images/bookmark.png";
import { useState } from "react/cjs/react.development";


function Card(props)
{
   
   const [islike,setislike]=useState(false);
   const [issaved,setissaved]=useState(false);

   const saveitem ={
      id:props.id,
      img_src:props.imgurl,
      rover:props.rover,
      cameraname:props.cameraName
   };


   function handlelike (){
     if(islike)
     setislike(false);
     else
     {
      setislike(true);
    
     }
     
   }

   function handlesave(){
     if(issaved)
     setissaved(false);
     else{
      setissaved(true);
      props.onsave(saveitem);
      console.log(saveitem.id);
     }
   }

   

return (
  

     <div className="card" >

        <div className="card-header">
            <img className="card-header-logo" src={props.imgurl} />
            <h6 className="card-title">{props.rover} Rover </h6>
        </div>
        
        <img className="card-img" src={props.imgurl} alt="No img"/>
        <div className="card-icon">
            <div className="card-block1">
               
               <h6><strong>Camera :</strong> {props.cameraName}</h6>
               <h6 className="card-date">{props.date}</h6>
            </div> 

            <div className="card-block2">
               <img onClick={handlelike} className="icon" src={islike?like:unlike} />
               <img onClick={handlesave} className="icon" src={issaved?bookmark:unbookmark} /> 
            </div> 
        </div>     
      
     </div>

  );

};


export default Card;