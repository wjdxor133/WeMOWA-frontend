import React, { Component } from "react";
import { DropdownCheck } from "../../components/Dropdown/Dropdown";

class CountryDD extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    fetch("/data/signup.json")
      .then((res) => res.json())
      .then((res) => this.setState({ countries: res.countries }));
  }

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
          list={this.state.countries}
          listOpen={this.state.listOpen}
          handleToggle={this.handleToggle}
          selectedItem={this.state.country}
          handleSelection={this.selectedItem}
        />
      </div>
    );
  }
}

export default CountryDD;
