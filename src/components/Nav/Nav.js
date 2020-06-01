import React, { Component } from "react";
import NavNew from "./Menu/NavNew";
import NavLuggage from "./Menu/NavLuggage";
import NavAccessories from "./Menu/NavAccessories";
import NavGifts from "./Menu/NavGifts";
import NavServices from "./Menu/NavServices";
import "./Nav.scss";

const navMenu = [
  <NavNew />,
  <NavLuggage />,
  <NavAccessories />,
  <NavGifts />,
  <NavServices />,
];

class Nav extends Component {
  state = {
    menu: [0, 1, 2, 3, 4],
    component: "",
    menuChacked: false,
  };

  showMenu = (e) => {
    let num = this.state.menu.indexOf(Number(e.target.id));
    this.setState({ component: navMenu[num], menuChacked: this.props.checked });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Nav">
        <div className="Nav-box">
          <ul>
            <li id="0" className="NEW-btn" onMouseEnter={this.showMenu}>
              NEW
            </li>
            <li id="1" className="LUGGAGE-btn" onMouseEnter={this.showMenu}>
              LUGGAGE
            </li>
            <li id="2" className="ACCESSORIES-btn" onMouseOver={this.showMenu}>
              ACCESSORIES
            </li>
            <li id="3" className="GIFTS-btn" onMouseOver={this.showMenu}>
              GIFTS
            </li>
            <li id="4" className="SERVICES-btn" onMouseOver={this.showMenu}>
              SERVICES
            </li>
            <li className="CUSTOMISE-btn">CUSTOMISE</li>
          </ul>
        </div>
        {this.state.component}
      </div>
    );
  }
}

export default Nav;
