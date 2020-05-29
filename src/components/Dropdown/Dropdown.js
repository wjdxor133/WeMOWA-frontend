import React, { Component } from "react";
import "./Dropdown.scss";

export class DropdownCheck extends Component {
  state = {
    list: this.props.list,
    listOpen: false,
    selectedItem: this.props.list && this.props.list[0], // how to make this select corresponding product initially?
  };

  handleToggle = () => {
    this.setState((prev) => ({
      listOpen: !prev.listOpen,
    }));
  };

  selectItem = (m) =>
    this.setState({
      selectedItem: m,
      listOpen: false,
    });

  dynamicHeader = () => {
    //add other condition if necessary
  };

  render() {
    return (
      <div className="Dropdown">
        <div className="chHeaderWrapper" onClick={this.handleToggle}>
          <div className="chLeft">
            <i class="fas fa-check"></i>
          </div>
          <div className="chCenter">{this.state.selectedItem.name}</div>
          <div className="chRight">
            <i
              className={
                this.state.listOpen
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>
        <div className={`${this.state.listOpen ? "show" : "hide"}`}>
          <ul className="chFlyout">
            {this.state.list.map((m) => (
              <li
                key={m.id}
                onClick={() => this.selectItem(m)}
                className={this.state.selectedItem === m ? "selected" : "li"}
              >
                <span className="each">{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
