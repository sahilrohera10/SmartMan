import React from "react";
import logo from "../Assests/logo.png";
export default function Navbar() {
  return (
    <div
      style={{
        width: "85vw",
        height: "9vh",
        // border: "1px solid white",
        margin: "auto",
        paddingTop: "20px",
      }}
    >
      <img style={{ width: "11vw" }} src={logo} alt="" />
    </div>
  );
}
