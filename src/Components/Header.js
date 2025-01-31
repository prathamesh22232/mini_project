import React, { useState } from "react";
import sggsLogo from "../Images/bw sggs.png";

export default function Header() {
  const [btn, setBtn] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [text, setText] = useState("Enable dark mode");

  const toggle = () => {
    if (btn.color === "white") {
      setBtn({
        color: "black",
        backgroundColor: "white",
      });
      setText("Enable dark mode");
    } else {
      setBtn({
        color: "white",
        backgroundColor: "black",
      });
      setText("Enable light mode");
    }
  };

  return (
    <div className="d-flex justify-content-around">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          color: btn.color,
          backgroundColor: btn.backgroundColor,
          height: "110px",
          width: "75%",
          transition: "all 0.5s ease", // Smooth transition
        }}
      >
        <div className="container-fluid">
          <img
            src={sggsLogo}
            style={{ width: "150px", height: "100px" }}
            alt="SGGS Logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: btn.color, fontSize: "17px" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: btn.color, fontSize: "17px" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: btn.color, fontSize: "17px" }}
                >
                  Contact us
                </a>
                <ul
                  className="dropdown-menu"
                  style={{
                    color: btn.color,
                    backgroundColor: btn.backgroundColor,
                  }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      target="blank"
                      href="https://sggs.ac.in/"
                    >
                      Our website
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      target="blank"
                      href="https://www.linkedin.com/school/shri-guru-gobind-singhji-institute-of-engineering-and-technology-vishnupuri-nanded/posts/?feedView=all"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      target="blank"
                      href="https://www.instagram.com/sggsietnanded/?hl=en"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      target="blank"
                      href="https://www.facebook.com/SGGSC26Chd/"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div
              className="form-check form-switch mx-3"
              style={{ fontSize: "17px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggle} // Trigger toggle on change
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {text}
              </label>
            </div>

            <form
              className="d-flex"
              role="search"
              style={{ color: btn.color, fontSize: "17px" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
