import React, { Component } from "react";
import "./EmptyCart.scss";

class EmptyCart extends Component {
  state = {};
  render() {
    return (
      <div className="EmptyCart flexColumnCenter">
        <span className="ecHeader">You haven't added anything yet</span>
        <button className="ecBtn">Start Shopping</button>
      </div>
    );
  }
}

export default EmptyCart;
