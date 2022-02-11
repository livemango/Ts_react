import React, { useContext } from "react";
import { useMyContext, UPDATE_COLOR } from "./useMyContext";
 
const Buttons = () => {
  const { dispatch } = useContext(useMyContext);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "red" });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "yellow" });
        }}
      >
        黄色
      </button>
    </React.Fragment>
  );
};
 
export default Buttons;
 
