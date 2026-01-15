import Image from "next/image";
import React from "react";
import Logo from "../../../public/Assets/dummylogo.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-6">
            <div className="footer-logo">
                <Image src={Logo} alt="logo" layout="cover" width={100} />
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>

            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

         
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Our Location</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

        
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Contacts</h5>
            <ul className="footer-contact">
              <li>info@xxx.com</li>
              <li>+91 98461 xxxxxx</li>
              <li>
                2nd Floor, Tihama Centre, Near <br />
                Ernakulam Medical Centre, NH 66, <br />
                Palarivattom, Kochi – 682028
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
