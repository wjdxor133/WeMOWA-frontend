import React, { Component } from "react";
import { DropdownCat } from "../../components/Dropdown/Dropdown";

class SizesDD extends Component {
  state = {
    sizes: [
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

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  selectedItem = (t) => {
    console.log(t.name);
    this.setState({ default: t.name, listOpen: false });
  };

  render() {
    return (
      <div>
        <DropdownCat
          category="Size"
          list={this.state.sizes}
          selectedItem={this.state.selectedItem}
          listOpen={this.state.listOpen}
          handleToggle={this.handleToggle}
          handleSelection={this.selectedItem}
        />
      </div>
    );
  }
}

export default SizesDD;
