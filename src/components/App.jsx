import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import SavedItem from "./saveditems";
import {BrowserRouter,Routes,Switch,Route,Link } from "react-router-dom";
import Logo from "./images/logo.png";



function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [savelist,setsavelist]= useState([]);


  function addsaveitem(saveitem){
    setsavelist(prevlist=>{
      return [...prevlist,saveitem];
    });
   console.log(savelist);  
  };

  

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YUuxb0PcWxRVmyJVrrBYVWyl60xx8K5bwVNshqgI")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);

          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
           <div class="loading-section">
              
              <div class="loading">
                <span>Loading</span>
              </div>
               
           </div>
           ) ;
  } else {
    
    return (
      
      <BrowserRouter>
          <div className="header">
             <Link className="router-link" to="/">
                <div class="home-block">
                    <img className="logo" src={Logo}/>
                    <h1 className="home-title">Nasa Image Gallery</h1>
                </div>
             </Link>
             <Link to="/saved">
                 <button className="saved-link">Saved Items</button>
             </Link>
          </div>
          
          <div className="main-content">
            <Routes>
              
                      <Route path="/saved" element={<SavedItem  list={savelist} />} />
                      <Route path="/" exact element= {Object.keys(items).map((item,i) => (
                          <div key={i} class="wrapper">
                          {items[item].map((media,ind)=>{return ind%10==0 ? <Card imgurl={media.img_src} rover={media.rover.name} cameraName={media.camera.full_name} date={media.earth_date} id={media.id} onsave={addsaveitem} />:<span></span>})}
                          </div>
                        ))} />
              
            </Routes>
          </div>
      </BrowserRouter>
          
       

        
      
    );
  }

}

  


export default App;



 // function App()
  // {
    
  //   const [item,setitem]=useState([]);
  
  //   const retrieveData = async ()=>{
  //     const response=await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YUuxb0PcWxRVmyJVrrBYVWyl60xx8K5bwVNshqgI');
     
  
  //     setitem( await response.json());

  //     const [photos]=item;
  //     console.log(photos);
  //   };
  
  //   useEffect(()=>{
  //     retrieveData();
  //   },[]);
  
  
  //   return ( 
  //       <div>
  //         <h1> Nasa Image Gallery </h1>
  
  //           {/* <div className="wrapper">
  //           {photos.map((curEle,index)=>(
  //             <Card key={index} title={curEle.login} imgurl={curEle.avatar_url} date={curEle.followers_url}   />
  //           ))}
  //         </div>   */}
  //         <Card />
  
  //     </div>);
  // }