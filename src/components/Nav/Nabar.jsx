import React from "react";
import SVGComponent from "./SVGComponent";

function Nabar() {
  const blurStyle = {
    background: "rgb(0 0 0 / 10%)", // transparent white
    fontWeight:"500",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    padding: "8px 15px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "25px 60px 0px",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        <span style={blurStyle}>Kissan Products</span>
        <span style={blurStyle}>Kissan</span>
        <span style={blurStyle}>Contact</span>
      </div>

      {/* Center Logo */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SVGComponent width={110} height={99} />
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Nabar;
