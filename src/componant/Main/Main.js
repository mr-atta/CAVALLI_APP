import React from "react";
// CSS
import "../ResetCSS.css";
import "../CommonCSS.css";
import "./Main.css";

import Item from "./Item.js";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Redux/Actions/index.js";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // fontawesome solid
import { faSmileBeam, faAnchor } from "@fortawesome/free-solid-svg-icons"; // faMessageSmile
// // fontawesome regular
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

// img
import giftIdeas from "../img/category/coco-tafoya-_Q0dP8xiUGA-unsplash.jpg";
import outdoor from "../img/category/hutomo-abrianto-9mPl0Zo7_gQ-unsplash.jpg";
import indoor from "../img/category/veronika-fitart-7cfSOLZiRpo-unsplash.jpg";
import wallDecor from "../img/category/samantha-gades-BlIhVfXbi9s-unsplash.jpg";
import resin from "../img/category/resin-art-workshop-cheese-board-and-coasters-sydney-600.webp";
import wood from "../img/category/mike-kenneally-o14nNEbLa-s-unsplash.jpg";
import storage from "../img/category/79846421_115207263300764_3133365202926436352_o.jpg";
import accessory from "../img/category/IMG_9718.jpg";

let hello = () => {
  // here we need render product page with categury filter (search)
  alert("Hello");

  // note : call as :
  // onClick={() => hello(x,y)} // OR // onClick={hello}
};

function Main(props) {
  
  const cartCounter = useSelector((state) => state.cartCounter);
  const dispatch = useDispatch();

  const list = [1, 2, 3, 4, 5];

  return (
    <div id="Main">
      {/* Categories List */}
      <div id="categories" className="list_V">
        <div className="list_H  categoryList">
          <div className="categoryDiv category01" onClick={() => hello()}>
            {" "}
            <img
              src={giftIdeas}
              alt="Gift Ideas"
              className="categoryImg"
            />{" "}
            <span className="categoryName"> Gift Ideas </span>{" "}
          </div>
          <div className="categoryDiv category06">
            <img src={outdoor} alt="Outdoor" className="categoryImg" />{" "}
            <span className="categoryName"> Outdoor </span>
          </div>
          <div className="categoryDiv category07">
            <img src={indoor} alt="Indoor" className="categoryImg" />
            <span className="categoryName"> Indoor </span>
          </div>
          <div className="categoryDiv category07">
            <img src={wallDecor} alt="Wall Decor" className="categoryImg" />
            <span className="categoryName"> Wall Decor </span>
          </div>
          <div className="categoryDiv category03">
            <img src={resin} alt="Resin" className="categoryImg" />
            <span className="categoryName"> Resin </span>
          </div>
          <div className="categoryDiv category04">
            <img src={wood} alt="Wood" className="categoryImg" />
            <span className="categoryName"> Wood </span>
          </div>
          <div className="categoryDiv category02">
            <img src={storage} alt="Storage" className="categoryImg" />
            <span className="categoryName"> Storage </span>
          </div>
          <div className="categoryDiv category05">
            <img src={accessory} alt="Accessory" className="categoryImg" />
            <span className="categoryName"> Accessories </span>
          </div>
        </div>
      </div>

      <FontAwesomeIcon icon="fa-solid fa-axe" />

      {/* background img with text and btn  */}
      <div id="backgroundImgDiv" className="" about="Handmade Image">
        <div className="textContaner">
          <p className="textOne Text">
            {" "}
            Welcome To <span className="test1_span">CAVALLI</span> Craft Home,
            Where You Will Find What You Want{" "}
            <FontAwesomeIcon icon={faAnchor} className="Fa FaHbtu " />
          </p>
          {/* <p className="textTwo Text">"Where You Will Find What You Want"</p>  */}
        </div>
        <p className="textThree Text ">
          {" "}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'
        </p>
        <button className="SeeProdBtn">See the our Products </button>
      </div>

      {/* List of top selling product render from database  */}
      <div className="topSelling">
        <Item list={list}></Item> {/* sending >> topSelling list */}
      </div>
      {/* List of new product render from database  */}
      <div className="newProduct">
        <Item list={list}></Item> {/* sending >> newProduct list */}
      </div>

      {/* <h3>INCREMENT </h3> 
      <div>{cartCounter}</div>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button> */}
    </div>
  );
}
export default Main;
