import React, { Component } from "react";
// CSS
import "../ResetCSS.css";
import "../CommonCSS.css";
import "./Main.css";
// bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import { Button , Card , ListGroup , ListGroupItem } from "react-bootstrap";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // fontawesome solid
import { faCartArrowDown, faAnchor } from "@fortawesome/free-solid-svg-icons"; // faMessageSmile

// Redux
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Redux/Actions/index.js";

function Item(props) {

  const cartCounter = useSelector((state) => state.cartCounter);
  const dispatch = useDispatch();

  const listItems = props.list.map((number) =>
  <Card style={{ width: "18rem" }} className="">
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>item name</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.(describtion)
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>product box </ListGroupItem>
    <ListGroupItem>product price</ListGroupItem>
    <ListGroupItem># categories</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link  onClick={() => dispatch(increment())}>Add To<FontAwesomeIcon icon={faCartArrowDown} className="Fa FaHbtu "  /> </Card.Link>
    {/* <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
  );
  return (
    <div id="Item" className="list_H">
     {listItems}
    </div>
  );
}

export default Item;