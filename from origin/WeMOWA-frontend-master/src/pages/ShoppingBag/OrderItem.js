import React, { Component } from "react";
import "./OrderItem.scss";

class OrderItem extends Component {
  render() {
    return (
      <div className="OrderItem flexSpaceBetween">
        <div className="orderImg">
          <img src={this.props.product.image} alt="" />
        </div>
        <div className="orderDetails">
          <div className="orderItemTitle">
            <div className="subHeader">{this.props.product.collection}</div>
            <h5>{this.props.product.name}</h5>
          </div>
          <div className="orderItemOptions">
            <div className="color flexAlignCenter">
              <div className="cartUpper">
                {`Color: ${this.props.product.color}`}
              </div>
            </div>
            <div className="availability cartUpper">In Stock</div>
          </div>
          <div className="flexSpaceBetween">
            <div>{this.props.product.amount}</div>
            <div>{this.props.product.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
