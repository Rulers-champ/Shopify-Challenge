import React ,{useState}from "react";
import Savedcard from "./savedcard";




function Saved(props)
{
    const [savearr,setsavearr]=useState(props.list);

    function deletesaved(data){
        setsavearr(previtems=>{
            return previtems.filter((item)=>{
                return (item.id!==data);
            });
        })

      
    }

    

    
    if(savearr.length===0)
        return <div className="emptysave_block">
                 <h1 className="emptysave_text">No Items</h1>
               </div>;    
    else
        return <div class="savedwrapper">
                {savearr.map((item)=>{
                    return <div><Savedcard savedimg={item.img_src} title={item.rover} camera={item.cameraname} id={item.id} onDelete={deletesaved} /></div>;
                })}
            </div>;

}

export default Saved;