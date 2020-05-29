import React, { Component } from "react";
import { DropdownCat } from "../../components/Dropdown/Dropdown";

class SizesDD extends Component {
  state = {
    location: [
      {
        id: 0,
        name: "Trunk XL",
        size: "80x44x46 cm",
      },
      {
        id: 1,
        name: "Cabin S",
        size: "80x44x46 cm",
      },
      {
        id: 2,
        name: "Cabin Plus",
        size: "80x44x46 cm",
      },
      {
        id: 3,
        name: "Check-In M",
        size: "80x44x46 cm",
      },
    ],
  };

  render() {
    return (
      <div>
        <DropdownCat category="Size" list={this.state.location} />
      </div>
    );
  }
}

export default SizesDD;
