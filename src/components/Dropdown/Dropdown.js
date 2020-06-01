import React, { Component } from "react";
import "./Dropdown.scss";

export class DropdownCheck extends Component {
  render() {
    return (
      <div className="DropdownCheck">
        <div className="chHeaderWrapper" onClick={this.props.handleToggle}>
          <div className="chLeft">
            <i className="fas fa-check"></i>
          </div>
          <div className="chCenter">{this.props.selectedItem}</div>
          <div className="chRight">
            <i
              className={
                this.props.listOpen
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>
        <div className={`${this.props.listOpen ? "show" : "hide"}`}>
          <ul className="chFlyout">
            {this.props.list.map((t) => (
              <li
                key={t.id}
                className={
                  this.props.selectedItem === t ? "selected" : "unselected"
                }
                onClick={() => this.props.handleSelection(t)}
              >
                <span className="each">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export class DropdownCat extends Component {
  render() {
    return (
      <div className="DropdownCat">
        <div className="chHeaderWrapper" onClick={this.props.handleToggle}>
          <div className="chLeft"></div>
          <div className="chCenter">{this.props.selectedItem}</div>
          <div className="chRight">
            <i
              className={
                this.props.listOpen
                  ? "fas fa-chevron-up"
                  : "fas fa-chevron-down"
              }
            ></i>
          </div>
        </div>
        <div className={`${this.props.listOpen ? "show" : "hide"}`}>
          <ul className="chFlyout">
            {this.props.list.map((t) => (
              <li>{t.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
