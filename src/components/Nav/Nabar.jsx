import React from 'react'
import SVGComponent from './SVGComponent'   // import svg component

function Nabar() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      
      <div style={{display:"flex", gap:"20px"}}>
        <span>Kissan Products</span>
        <span>Kissan</span>
        <span>Contact</span>
      </div>

      {/* Logo + SVG together */}
      <div style={{display:"flex", alignItems:"center", gap:"10px",background:"green"}}>
        <SVGComponent width={50} height={50} />
      </div>

      <div style={{display:"flex", gap:"10px"}}>
        <button>Login</button>
        <button>Register</button>
      </div>

    </div>
  )
}

export default Nabar