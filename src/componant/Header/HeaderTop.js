import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// bootstrap
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
import { useSelector, useDispatch } from "react-redux";

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
        
        <Link to="/cart">
          <button className="BtHtop">
            <FontAwesomeIcon icon={faCartArrowDown} className="Fa FaHtop" /> (
            {cartCounter})
          </button>
        </Link>
      </div>

      {/* <FontAwesomeIcon icon={faCheck} />
          <FontAwesomeIcon icon={faStar} /> */}
    </div>
  );
}

export default HeaderTop;
