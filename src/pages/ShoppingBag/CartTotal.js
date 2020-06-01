import React, { Component } from "react";
import "./CartTotal.scss";

class CartTotal extends Component {
  state = {};
  render() {
    return (
      <div className="CartTotal">
        <div className="ctSubtotal flexSpaceBetween">
          <div className="left">Subtotal</div>
          <div className="right">{this.props.cartTotal}</div>
        </div>
        <div className="ctShipping flexSpaceBetween">
          <div className="left">Shipping</div>
          <div className="right">0</div>
        </div>
        <div className="ctEstTotal flexSpaceBetween">
          <div className="left">Estimated Total</div>
          <div className="right">0</div>
        </div>
        <button className="ctCheckoutBtn">Checkout</button>
        <button className="ctContinueBtn">Continue Shopping</button>
      </div>
    );
  }
}

export default CartTotal;
