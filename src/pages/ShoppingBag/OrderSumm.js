import React, { Component } from "react";
import OrderItem from "./OrderItem";
import "./OrderSumm.scss";

class OrderSumm extends Component {
  state = {
    items: [
      {
        pn: 92585004,
        collection: "original",
        name: "Truck XL",
        color: "red",
        size: "80 x 44 x 46",
        price: 1530,
        qty: 1,
      },
      {
        pn: 92590041,
        collection: "classic",
        name: "Cabin",
        color: "black",
        size: "55 x 40 x 23",
        price: 1000,
        qty: 2,
      },
      {
        pn: 92552014,
        collection: "original",
        name: "Cabin S",
        color: "silver",
        size: "55 x 40 x 20",
        price: 1230,
        qty: 1,
      },
    ],
    shipping: 0,
  };

  handleTotal = () => {
    let total = 0;
    this.state.items.map((item) => (total += item.price * item.qty));
    return total;
  };

  render() {
    const { shipping } = this.state;
    return (
      <div className="OrderSumm">
        <div className="osHeader">Order Summary</div>
        <div className="osLists">
          {this.state.items.map((item) => (
            <OrderItem key={item.pn} product={item} qty={item.qty} />
          ))}
        </div>
        <div className="osCal">
          <div className="osSubtotal flexSpaceBetween">
            <div className="label">Subtotal</div>
            <div className="amount">{this.handleTotal()} €</div>
          </div>
          <div className="osSubtotal flexSpaceBetween">
            <div className="label">Shipping</div>
            <div className="amount">{shipping} €</div>
          </div>
          <div className="osTotal flexSpaceBetween">
            <div className="label">Total</div>
            <div className="amount">{this.handleTotal() + shipping} €</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSumm;
