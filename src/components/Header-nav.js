import React, { Component } from "react";
import "./Header-nav.css"
 
class Header extends Component {

  state={ displayMenu :false};

  toggleHeaderMenu=()=>{
    this.setState({ displayMenu : !this.state.displayMenu });
  }

  render() {
    return (
        <header className="header">
          <button onClick={this.toggleHeaderMenu} className="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></button>
          {this.state.displayMenu && (<nav className="header-mobile-nav">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Solutions</a>
            <a href="/">Blog</a>
            
          </nav>)
          }
          <button className="header-button-mobile"><i class="fa fa-comment-o" aria-hidden="true"></i></button>
          <img src={require("../assets/logo.png")} className="header-logo" alt="" />
          <nav className="header-nav">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Solutions</a>
            <a href="/">Blog</a>
            <button className="header-button"><i class="fa fa-comment-o" aria-hidden="true"></i> Get In Touch</button>
          </nav>
          
        </header>
    );
  }
}
 
export default Header;