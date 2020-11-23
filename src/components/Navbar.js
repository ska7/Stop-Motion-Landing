import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar-section">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {"Stop-motion & Креативы"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="program"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                >
                  Программа <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="experts"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                >
                  Эксперты <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="reviews"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                >
                  Отзывы <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="prices"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                >
                  Тарифы<span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
