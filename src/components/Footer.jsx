import React from "react";
import "../Styles/Footer.css";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="footer_wrapper">
        <div className="footer_center">
          <p className="touch">Get in Touch With Us</p>
          <h4 className="mail">marvellouseniola101@gmail.com</h4>
        </div>

        <div className="footer_flex">
          <div className="name">
            <h1>Eniola</h1>
          </div>
          <div className="street">
            <h4>Street Avenue 21, CA</h4>
          </div>
          <div className="media_links_number">
            <div className="number">
              <p>08020639509</p>
            </div>
            <div className="media_links">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
