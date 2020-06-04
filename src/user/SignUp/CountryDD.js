import React, { Component } from "react";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";

class CountryDD extends Component {
  state = {
    country: this.props.country,
  };

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  selectedItem = (c) => {
    console.log(c.name);
    this.setState({ country: c.name, listOpen: false });
  };

  render() {
    return (
      <div>
        <DropdownCheck
          list={this.props.countries}
          listOpen={this.state.listOpen}
          handleToggle={this.handleToggle}
          selectedItem={this.props.country}
          handleSelection={this.selectedItem}
        />
      </div>
    );
  }
}

export default CountryDD;
