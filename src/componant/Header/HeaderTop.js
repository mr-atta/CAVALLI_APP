import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../img/86176785_135765674578256_5399028823150821376_o.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// solid fortawesome
import {
  faStore,
  faVanShuttle,
  faIdCard,
  faStar,
  faCheck,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faA, faC, faV, faL, faI } from "@fortawesome/free-solid-svg-icons";
// regular fortawesome
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
// Redux
import { useSelector , useDispatch} from "react-redux";

function HeaderTop(props) {
  const cartCounter = useSelector((state) => state.cartCounter);
  return (
    <div className="HeaderT Contaner">
      <span>
        {" "}
        <i>
          <span id="MainLogo">CAVALLI</span> <span id="SubLogo">HandMade</span>
        </i>
      </span>

      <div>
        <button className="BtHtop">
          <FontAwesomeIcon icon={faIdCard} className="Fa FaHtop" /> LogIn
        </button>
        <button className="BtHtop">
          <FontAwesomeIcon icon={faCartArrowDown} className="Fa FaHtop" /> (
          {cartCounter})
        </button>
      </div>

      {/* <FontAwesomeIcon icon={faCheck} />
          <FontAwesomeIcon icon={faStar} /> */}
    </div>
  );
}

export default HeaderTop;
