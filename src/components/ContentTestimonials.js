import React, { Component } from "react";
import TESTIMONIAL from "./Testimonial";
import "./ContentTestimonials.css"
 
const Testimonial = props => {
    const{image, name, designation, description} = props.testimonial;
    return(
        <div className="testimonial-content">

            <div className="profile-message">
            <div class="outer"></div>
            <div class="inner"></div>
                <p>{description}</p>
            </div>
            <div className="profile-data">
                <div className="profile-img">
                    <img src={image} alt="" />
                </div>
                <div className="profile-name">
                     <p className="user-name">{name}</p>
                     <p className="desig-name">{designation}</p>
                </div>
            </div>

        </div>
    );

}


class ContentTestimonial extends Component {

  render() {
    return (
        <div className="Testimonials">
            <h2>Testimonials</h2>
            <div className="Testimonial-components">
                {
                    TESTIMONIAL.map(TESTIMONIAL => {
                        return(
                            <Testimonial key={TESTIMONIAL.id} testimonial={TESTIMONIAL} />
                        );                       
                    })
                }
            </div>
        </div>
    );
  }
}
 
export default ContentTestimonial;