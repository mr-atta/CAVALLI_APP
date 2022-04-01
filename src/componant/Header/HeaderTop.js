import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/86176785_135765674578256_5399028823150821376_o.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// solid
import {
  faStore,
  faVanShuttle,
  faIdCard,
  faStar,
  faCheck,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faA, faC, faV, faL, faI } from "@fortawesome/free-solid-svg-icons";
// regular
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

class HeaderTop extends React.Component {
  render() {
    return (
      <div className="HeaderT Contaner">
        {/* <img
            src={logo}
            alt="CAVALLI logo"
            width={"100 px"}
            height={"100 px"}
          /> */}

        <span>
          {" "}
          <i>
            <span id="MainLogo">CAVALLI</span>{" "}
            <span id="SubLogo">HandMade</span>
          </i>
          {/* <FontAwesomeIcon icon={faC} />
          <FontAwesomeIcon icon={faA} />
          <FontAwesomeIcon icon={faV} />
          <FontAwesomeIcon icon={faA} />
          <FontAwesomeIcon icon={faL} />
          <FontAwesomeIcon icon={faL} />
          <FontAwesomeIcon icon={faI} /> */}
        </span>

        <div>
          <button className="BtHtop">
          <FontAwesomeIcon icon={faIdCard} className="Fa FaHtop" /> LogIn
          </button>
          <button className="BtHtop">
            <FontAwesomeIcon icon={faCartArrowDown} className="Fa FaHtop" /> (0)
          </button>
        </div>

        {/* <FontAwesomeIcon icon={faCheck} />
          <FontAwesomeIcon icon={faStar} /> */}
      </div>
    );
  }
}

export default HeaderTop;
