import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import "./style.css"

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
                <Link to="/"
                  style={{
                  fontFamily: "monospace",
                  position: "relative"
                  }} className="brand-logo black-text">
                  What To Eat
                </Link>
                <Link to="/aboutus"
                    style={{
                    fontFamily: "monospace"
                    }} className="link1 black-text">
                    About
                </Link>
                <Link to="/spinner"
                  style={{
                  fontFamily: "monospace"
                  }} className="link2 black-text">
                  SpinForFun
                </Link>
                <button
                  onClick={this.onLogoutClick}
                  className="logout btn btn-small waves-effect waves-light hoverable blue accent-3">
                  Logout
                </button>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
