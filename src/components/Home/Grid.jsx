import React from "react";
import "./grid.css";

function Grid({ show }) {
  return (
    <div className={`grid-container ${show ? "show" : ""}`}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div className="card" key={index}>
          Item {item}
        </div>
      ))}
    </div>
  );
}

export default Grid;