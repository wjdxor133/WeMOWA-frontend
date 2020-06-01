import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckOutDlivery from "./CheckOutMenu/CheckOutDelivery";
import CheckOutAddr from "./CheckOutMenu/CheckOutAddr";
import CheckoutPayment from "./CheckOutMenu/CheckoutPayment";
import "./CheckOut.scss";

class CheckOut extends Component {
  state = {};
  render() {
    return (
      <div className="CheckOut">
        <Header />
        <div className="checkOut-main">
          <section className="checkOut-mainLeft">
            <form>
              <div className="CheckOutMenu-item">
                <div className="CheckOutMenu-title">
                  <span className="title-number">1.</span>
                  <h2>Delivery and pickup options</h2>
                </div>
                {/* <CheckOutDlivery /> */}
              </div>
              <div className="CheckOutMenu-item">
                <div className="CheckOutMenu-title">
                  <span className="title-number">2.</span>
                  <h2>Shipping and billing details</h2>
                </div>
                {/* <CheckOutAddr /> */}
              </div>
              <div className="CheckOutMenu-item">
                <div className="CheckOutMenu-title">
                  <span className="title-number">3.</span>
                  <h2>Payment method</h2>
                </div>
                <CheckoutPayment />
              </div>
              <div className="CheckOutMenu-item">
                <div className="CheckOutMenu-title">
                  <span className="title-number">4.</span>
                  <h2>Review your order</h2>
                </div>
                {/* <CheckOutDlivery /> */}
              </div>
            </form>
          </section>
          <section className="checkOut-mainRight">hello</section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CheckOut;
