import React, { Component } from "react";
import CartHeader from "./CartHeader";
import ShoppingBag from "./ShoppingBag";
import EmptyCart from "./EmptyCart";

class CartWrapper extends Component {
  state = {
    products: [],
    testProducts: [
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
    cartTotal: 0,
    shipping: 0,
    grandTotal: 0,
  };

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.products }));

    this.handleTotal();
  }

  //제품 수량 빼기
  handleMinus = (product) => {
    const testProducts = [...this.state.testProducts]; //testProducts 배열을 clone 해온다. state 를 직접 업데이트 시키지 않기 위해
    const i = testProducts.indexOf(product); // 각 제품의 index 를 알기 위해
    testProducts[i] = { ...product }; //prouducts[i] 의 객체를 clone 한다음
    if (testProducts[i].qty > 1) {
      //수량이 1 아래로 내려가지 않게 하기 위해
      testProducts[i].qty--; //clone 된 객체의 수량에 1을 빼준 후
    }
    this.setState({ testProducts }); // 그 값을 testProduct 에 setState 해준다
  };

  //제품 수량 더하기
  handlePlus = (product) => {
    const testProducts = [...this.state.testProducts];
    const i = testProducts.indexOf(product);
    testProducts[i] = { ...product };
    testProducts[i].qty++; //clone 된 객체의 수량에 1을 더해준 후
    this.setState({ testProducts }); // 그 값을 testProduct 에 setState 해준다
  };

  handleRemove = (productNumber) => {
    const testProducts = this.state.testProducts.filter(
      (p) => p.pn !== productNumber
    );
    this.setState({ testProducts });
  };

  handleSubtotal = (product) => {
    const qty = product.qty;
    return product.price * qty;
  };

  handleTotal = () => {
    let total = 0;
    this.state.testProducts.map((item) => (total += item.price * item.qty));
    total = total.toFixed(2);

    this.setState({ cartTotal: total });
    //const grandTotal = total + this.state.shipping;
    //const update = () => {
    //  this.setState({ cartTotal: total });
    //};
    //return update;
  };

  render() {
    return (
      <div className="CartWrapper">
        <CartHeader totalNumber={this.state.testProducts.length} />
        <main className="ShoppingBag">
          {this.state.testProducts.length === 0 ? (
            <EmptyCart />
          ) : (
            <ShoppingBag
              testProducts={this.state.testProducts}
              handleMinus={this.handleMinus}
              handlePlus={this.handlePlus}
              handleRemove={this.handleRemove}
              handleSubtotal={this.handleSubtotal}
              cartTotal={this.state.cartTotal}
            />
          )}
        </main>
      </div>
    );
  }
}

export default CartWrapper;
