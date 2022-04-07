import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../Redux/Actions/index.js";

function Main(props) {
  
  const cartCounter = useSelector((state) => state.cartCounter);
  const dispatch = useDispatch();

  return (
    <div id="Main">
      <h3>INCREMENT </h3> 
      <div>{cartCounter}</div>
      <button onClick={() => dispatch(increment())}> + </button>
    </div>
  );
}
export default Main;
