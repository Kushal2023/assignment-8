import React from "react";
import "../App.css";

const Square = ({ value, changePlayer }) => {
  return (
    <div className="square" onClick={changePlayer}>
      {value}
    </div>
  );
};

export default Square;
