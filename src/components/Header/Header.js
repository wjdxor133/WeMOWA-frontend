import React, { Component } from "react";
import "./Header.scss";
import {
  faSearch,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="Header">
        <div className="header-menu">
          <div className="header-location">
            <span className="first-word">SHIP TO </span>
            <span>
              FRANCE | <span className="end-word">ENGLISH</span>
            </span>
          </div>
          <div className="header-logoTitle">
            <p>RIMOWA</p>
          </div>
          <div className="header-items">
            <div className="header-signIn">
              <span>SIGN IN</span>
            </div>
            <div className="header-icons">
              <FontAwesomeIcon className="icon1" icon={faSearch} />
              <FontAwesomeIcon className="icon2" icon={faHeart} />
              <FontAwesomeIcon className="icon3" icon={faShoppingBag} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
