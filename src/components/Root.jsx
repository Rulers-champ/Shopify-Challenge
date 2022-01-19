import React from "react";
import App from "./App";
import {BrowserRouter,Routes,Switch,Route } from "react-router-dom";
import Saved from "./saveditems";


function Root()
{
   return (
            <BrowserRouter>
                <div>
                    <h1>Nasa Image Gallery.</h1>
                    <Routes>
                      <Route path="/" element={<App/>} />
                      <Route path="/Saved" element={<Saved/>} />
                    </Routes>                    
                </div>
            </BrowserRouter>  
          );
           
          
}


export default Root;