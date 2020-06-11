import React, { Component } from "react";
import "./FooterContent.css"


class FooterContent extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <div className="footer-background"><img src={require("../assets/footer.jpg")} alt="" /></div>
        <div className="footer-form">
            <h2>Convinced To Work With Us?</h2>
            <p>Company has helped agencies to keep their promises to clients since 2005.</p>
            <div className="footer-inputs">
                <div><input type = "text" placeholder="Fullname" /></div>
                <div><input type = "email" placeholder="Email Address" /></div>
                <div><input type = "number" placeholder="Phone Number"/></div>
            </div>
            <div className="footer-textarea">
                <textarea  id="teaxt-area" name="w3review" rows="6" cols="107" placeholder="Message in Brief" />
            </div>
            <div className="submit-form"><button className="submit-form-btn">Submit</button></div>
        </div>
        </div>
    );
  }
}
 
export default FooterContent;