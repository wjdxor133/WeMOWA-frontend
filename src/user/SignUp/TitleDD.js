import React, { Component } from "react";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";

class TitleDD extends Component {
  state = {
    name: [
      {
        id: 0,
        name: "Mr.",
      },
      {
        id: 1,
        name: "Mrs.",
      },
      {
        id: 2,
        name: "Ms.",
      },
    ],
  };

  render() {
    return (
      <div>
        <DropdownCheck list={this.state.name} />
      </div>
    );
  }
}

export default TitleDD;
