import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s4 center brand-logo black-text" 
            >
              What To Eat
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
//Line 8 is where you can change the color
//Line 15 is a Materize CDN ClassName Docs are here https://materializecss.com/ 
//Line 17 is where the centered text is located
