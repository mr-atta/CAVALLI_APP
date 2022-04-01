import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// solid
import {
  faHome,
  faUsers,
  faGripVertical,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { faA, faC, faV, faL, faI } from "@fortawesome/free-solid-svg-icons";
// regular
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

class HeaderBtu extends React.Component {
  render() {
    return (
      <div className="HeaderB Contaner">
        <button className="BtHbtu"  > 
          <FontAwesomeIcon icon={faHome} className="Fa FaHbtu" /> Home
        </button>
        <button className="BtHbtu">
          <FontAwesomeIcon icon={faStore} className="Fa FaHbtu" /> Store
        </button>
        <button className="BtHbtu">
          <FontAwesomeIcon icon={faGripVertical} className="Fa FaHbtu" />{" "}
          Services
        </button>
        <button className="BtHbtu">
          <FontAwesomeIcon icon={faUsers} className="Fa FaHbtu" /> About Us
        </button>
      </div>
    );
  }
}

export default HeaderBtu;
