import React from "react";
import Logo from "../../../public/Assets/dummylogo.png"
import Image from "next/image";
function Header() {
  return (
    <div>
      <header className="header">
        <div className="container new-container-header">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <div className="container-fluid">
              <a className="navbar-brand logo-container" href="#">
          
                <Image src={Logo} alt="logo" layout="cover" width={100} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto nav-menu">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <button className="btn login-btn">Login</button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
