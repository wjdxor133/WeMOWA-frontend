import React, { Component } from "react";
import "./CartItem.scss";

class CartItem extends Component {
  render() {
    return (
      <div className="CartItem flex">
        <div className="cartImg">img</div>
        <div className="cartDetails">
          <div className="cartItemTitle cartMB">
            <div className="subHeader">{this.props.product.collection}</div>
            <h5>{this.props.product.name}</h5>
            <span className="cartItemPrice">{this.props.product.price}</span>
          </div>
          <div className="cartItemOptions cartMB">
            <div className="color flexAlignCenter">
              <div className="img"></div>
              <div className="cartUpper cartML3">
                {this.props.product.color}
              </div>
            </div>
            <div className="availability cartUpper">In Stock</div>
            <div className="shipping flexAlignCenter">
              <i className="fas fa-gift"></i>
              <div className="cartUpper cartML3">Standard Packaging</div>
            </div>
          </div>
          <div className="cartItemTotal flexSpaceBetween">
            <div className="cartItemQty flexAlignCenter">
              <div
                className="left"
                onClick={() => this.props.handleMinus(this.props.product)}
              >
                -
              </div>
              <div className="center">{this.props.product.qty}</div>
              <div
                className="right"
                onClick={() => this.props.handlePlus(this.props.product)}
              >
                +
              </div>
            </div>
            <div
              className="cartItemRemove cartUpper"
              onClick={() => this.props.handleRemove(this.props.product.pn)}
            >
              Remove
            </div>
            <div className="cartItemSubTotal">
              {`${this.props.handleSubtotal(this.props.product)} €`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
