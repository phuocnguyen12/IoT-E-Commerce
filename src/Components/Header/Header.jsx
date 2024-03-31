import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div className="inner">
        <div className="title">
          <a>IoT E-commerce</a>
        </div>

        <div className="SearchBar">
          <input placeholder="Search Product..." />
          <button className="clear">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          <FontAwesomeIcon className="loading" icon={faSpinner} />

          <button className="Search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="action">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
