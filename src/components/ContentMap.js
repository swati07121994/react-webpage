import React from "react";
import "./ContentMap.css"
 
const ContentMap = () => {

    return (
       <div className="content-map">
           <div className="content-text" >
               <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
           </div>
           <div className="map">
               <img src={require("../assets/map.png")} alt="" />
           </div>
       </div>
    );

}
 
export default ContentMap;