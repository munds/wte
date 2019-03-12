import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed" style={{ display: "inline-block" }}>
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Home
            </Link>
          </div>
          <div className="nav-wrapper white">
            <Link
              to="/spinner"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              Spinner
            </Link>
          </div>
          <div className="nav-wrapper white">
            <Link
              to="/aboutus"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              TheTeam
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
