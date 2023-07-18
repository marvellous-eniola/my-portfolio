import React, { useState } from "react";
import "../Styles/Nav.css";
import Sidebar from "./Sidebar";

export default function Nav() {
  return (
    <div>
      <div className="nav_wrapper">
        <h2 className="brand_name">
          Eniola <span className="nav_span">Studios</span>
        </h2>
        <div className="links_wrapper">
          <p>Home</p>
          <p>About me</p>
          <p> My Works</p>
          <div className="contact_wrapper">
            <p className="contact">Contact</p>
          </div>
        </div>
        <div className="sidebar">
         <Sidebar />
        </div>
      </div>
    </div>
  );
}
