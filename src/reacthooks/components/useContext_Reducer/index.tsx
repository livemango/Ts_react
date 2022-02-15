import React from "react";
import ShowArea from "./showArea";
import Buttons from "./buttons";
import { Color } from "./useMyContext";

function ContextReducer() {
  return (
    <div style={{background:'grey'}}>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default ContextReducer;
