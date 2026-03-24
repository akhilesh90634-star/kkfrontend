import React from "react";
import "./grid.css";

function Grid({ show }) {
  return (
    <div className={`grid-container ${show ? "show" : ""}`}>
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div className="card" key={index}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium minus rerum recusandae eum. Maxime, inventore! Ratione deleniti omnis, tempore natus aspernatur magnam at tempora facilis fugiat doloribus officia reprehenderit. A. {item}
        </div>
      ))}
    </div>
  );
}

export default Grid;