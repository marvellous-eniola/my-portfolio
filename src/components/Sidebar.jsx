import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Sidebar.css"

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {!toggle && (
        <div>
          <FaBars onClick={() => setToggle(!toggle)} />
        </div>
      )}
      {toggle && (
        <div>
          <div className="toggle_links_wrapper">
            <p className="home">
              Home{" "}
              <span>
                <FaTimes onClick={() => setToggle(!toggle)} />
              </span>
            </p>
            <p>About me</p>
            <p> My Works</p>
            <div className="contact_wrapper">
              <p>Contact</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
