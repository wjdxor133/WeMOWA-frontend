import React, { Component } from "react";
import "./NavServices.scss";

class NavServices extends Component {
  state = {
    checked: false,
  };

  leaveckeck = () => {
    this.setState({ checked: true }, () => console.log(this.state.checked));
  };

  render() {
    return (
      <div
        style={this.state.checked ? { display: "none" } : { display: "block" }}
        className="NavServices"
        onMouseLeave={this.leaveckeck}
      >
        <ul>
          <li className="services-list1">
            <span>STORE LOCATOR</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw3024992a/images/260/megamenu/Store.jpg"
              alt="Store.jpg"
            ></img>
            <a>Find the nearest store</a>
          </li>
          <li className="services-list2">
            <span>RIMOWA WARRANTY</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw1edb0b45/images/260/megamenu/Warranty.jpg"
              alt="Warranty.jpg"
            ></img>
            <a>Register your RIMOWA</a>
          </li>
          <li className="services-list3">
            <span>REPAIR SERVICE</span>
            <img
              src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw445cd3ed/images/260/megamenu/Repair.jpg"
              alt="Repair.jpg"
            ></img>
            <a>Repair your RIMOWA</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavServices;
