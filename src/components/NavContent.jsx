import React from "react";
import "../Styles/NavContent.css";
import { FaArrowRight } from "react-icons/fa";
import Me from "../assets/me.jpg";
import sideDesign from "../assets/imgSideDesign.svg";

export default function NavContent() {
  return (
    <div>
      <div className="nav_content_wrapper">
        <div className="adaptive">
          <h3>Adaptive Logo Design for Your Brand</h3>
        </div>
        <button className="nav_content_explore">
          Explore works
          <span>
            <FaArrowRight className="arrow_right" />
          </span>
        </button>
      </div>
      <div className="nav_about_me">
        <div>
          <h2>Let’s get know about me closer</h2>
          <p>
            Marvellous is an Ibadan-based visual designer focusing on branding
            and visual identity. His portfolio showcases his wide range of work,
            spanning books, posters and web design.
          </p>
          <button className="discover">Discover More About Me</button>
        </div>
        <div className="images">
          <img className="my_image" src={Me} alt="" />
        </div>
      </div>
    </div>
  );
}
