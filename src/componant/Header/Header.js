import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderTop from "./HeaderTop.js";
import HeaderBtu from "./HeaderBtu.js";
// CSS
import "../ResetCSS.css"
import "../CommonCSS.css";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <HeaderTop />
        <div id="spacer"></div>
        <HeaderBtu />
      </div>
    );
  }
}

export default Header;
