import React from "react";
import "./Footer.css"


const Footer = () => {
 
    return (
        <div className="footer">
            <div className="footer-text"><p>Ⓒ 2017 Company. All right reserved.</p></div>
            <div className="footer-text-links">
                <p>Follow us on:</p>
                <ul>
                    <li>
                        <a href="/"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href="/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                      <a href="/"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );

}
 
export default Footer;