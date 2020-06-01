import React, { Component } from "react";
import { rimIconMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="Footer">
        <div className="footer-container">
          <ul>
            <li className="li1">
              <div className="icon1"></div>
              <p className="li1-title">QUALITY TESTED</p>
              <p>EACH SUITCASE IS</p>
              <p>INDIVIDUALLY INSPECTED</p>
            </li>
            <li className="li2">
              <div className="icon2"></div>
              <p className="li2-title">5-YEAR CUARANTEE</p>
              <p>WHEN REGISTERING YOUR</p>
              <p>PRODUCT ONLINE</p>
            </li>
            <li className="li3">
              <div className="icon3"></div>
              <p className="li3-title">HOTEL REPAIRS</p>
              <p>REPAIRS COMPLETED</p>
              <p>BEFORE YOU DEPART</p>
            </li>
            <li className="li4">
              <div className="icon4"></div>
              <p className="li4-title">CUSTOMER SERVICE</p>
              <p>WHEN REGISTERING YOUR</p>
              <p>PRODUCT ONLINE</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
