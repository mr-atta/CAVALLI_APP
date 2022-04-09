import React from "react";
// CSS
import "../ResetCSS.css"
import "../CommonCSS.css";
import "./Main.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { increment , decrement } from "../../Redux/Actions/index.js";

function Main(props) {
  
  const cartCounter = useSelector((state) => state.cartCounter);
  const dispatch = useDispatch();

  return (
    <div id="Main">
      <h3>INCREMENT </h3> 
      <div>{cartCounter}</div>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>

    </div>
  );
}
export default Main;
