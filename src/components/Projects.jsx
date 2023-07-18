import React from "react";
import "../Styles/Projects.css";
import { Project } from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="project_text_wrapper">
        <h2>My Projects Highlight</h2>
        <button className="project_content_explore">
          Explore More <FaArrowRight className="projects_arrow_right" />
        </button>
      </div>
      <div className="container carousel">
        <Slider {...settings}>
          {Project.map((data) => {
            return (
              <div className="project_wrapper box">
                {/* <img
                  src={data.image}
                  alt=""
                  style={{
                    width: "100vh",
                    height: "40vh",
                  }}
                /> */}
                <div
                  style={{
                    height: "150px",
                    background: `url(${data.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="name_link_wrapper">
                  <p>{data.name}</p>
                  <a href={data.URL}>open link</a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
