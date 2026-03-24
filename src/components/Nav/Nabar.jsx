import React from 'react'
import SVGComponent from './SVGComponent'

function Nabar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "25px 60px 0px"
      }}
    >
      
      {/* Left Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        <span>Kissan Products</span>
        <span>Kissan</span>
        <span>Contact</span>
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
  )
}

export default Nabar