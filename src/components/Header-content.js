import React, { Component } from "react";
import BOXES from "./headerBoxes";
import "./Header-content.css"

const Boxes = props => {
    
    const { image, title } = props.boxes;
  return (
      <div className="box-element">
          <img src={image} alt="img" />
          <h3> <a href="/"> {title}</a></h3>
      </div>
  )
}

class HeaderContent extends Component {
  render() {
    return (
        <div className="content-bg" style={{
            position: 'relative'
        }}>
        <div className="bg-image"><img src={require("../assets/banner.jpg")} alt=""/></div>
       <div className="header-content">
           <h1>This is the Title of the Page</h1>
           <div className="header-boxes"> {
                     BOXES.map(BOXES => {
                    return(
                        <Boxes key={BOXES.id} boxes={BOXES}/>
                         );
                     })}
            </div>  
       </div>
       </div>
    );
  }
}
 
export default HeaderContent;