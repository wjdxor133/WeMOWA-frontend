import React, { Component } from "react";
import Nav from "../Nav";
import "./NavNew.scss";

class NavNew extends Component {
  state = {
    checked: false,
  };

  leaveckeck = () => {
    this.setState({ checked: true }, () => console.log(this.state.checked));
  };

  render() {
    return (
      <div
        // style={this.state.checked ? { display: "none" } : { display: "block" }}
        className="NavNew"
        // onMouseLeave={this.leaveckeck}
      >
        <ul>
          <li className="LATEST">
            <span className="LATEST-title">LATEST</span>
            <div>
              <p>Original Trunk XL</p>
              <p>RIMOWA x GLCO</p>
              <p>Essential Berry & Glacier</p>
              <p>Dior and RIMOWA</p>
              <a>All new products</a>
            </div>
          </li>
          <li className="Limied-edition1">
            <span>LIMITED EDITION</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw89129996/images/260/megamenu/GLCO@2x.jpg"
              alt="LIMITED EDITION"
            ></img>
            <a>RIMOWA x Garrett Leight</a>
          </li>
          <li className="Limied-edition2">
            <span>LIMITED EDITION</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwa722d243/images/260/megamenu/GlacierBerry.jpg"
              alt="GlacierBerry.img"
            ></img>
            <a>RIMOWA x Garrett Leight</a>
          </li>
          <li className="Limied-edition3">
            <span>LIMITED EDITION</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwec81bfa5/images/260/megamenu/Dior_2.jpg"
              alt="Dior_2.jpg"
            ></img>
            <a>RIMOWA x Garrett Leight</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavNew;
