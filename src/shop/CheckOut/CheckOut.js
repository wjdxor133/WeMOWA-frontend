import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckOutDlivery from "./CheckOutMenu/CheckOutDelivery";
import CheckOutAddr from "./CheckOutMenu/CheckOutAddr";
import CheckoutPayment from "./CheckOutMenu/CheckoutPayment";
import DaumPostcode from "react-daum-postcode";
import "./CheckOut.scss";

class CheckOut extends Component {
  state = {
    DliveryCehcked: true,
    AddrChecked: false,
    PaymentChecked: false,
    postChecked: false,
    postNumber: undefined,
    postAdress: undefined,
    isChecked: false,
  };

  showMenu = (num) => {
    this.setState({ isChecked: num });
  };

  stepTwoChecked = () => {
    this.setState({
      isChecked: 2,
    });
  };

  stepThreeChecked = () => {
    this.setState({
      isChecked: 3,
    });
  };

  // 우편번호 기능
  handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
        // console.log(extraAddress);
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    this.setState({ postNumber: data.zonecode, postAdress: fullAddress });
    this.postChecked();
  };

  postChecked = () => {
    this.setState({ postChecked: !this.state.postChecked });
  };

  render() {
    const { isChecked, postChecked, postNumber, postAdress } = this.state;

    const postStyle = {
      width: "40%",
      height: "30%",
      top: "10%",
      left: "30%",
      position: "absolute",
    };

    return (
      <div className="CheckOut" style={{ position: "relative" }}>
        <Header />
        <div className="checkOut-main">
          {postChecked ? (
            <DaumPostcode
              onComplete={this.handleComplete}
              style={postStyle}
              autoClose={true}
              autoResize={true}
            />
          ) : null}
          <section className="checkOut-mainLeft">
            <div className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={() => this.showMenu(1)}
              >
                <span className="title-number">1.</span>
                <h2>Delivery and pickup options</h2>
              </div>
              <div className={isChecked === 1 ? "block" : "none"}>
                <CheckOutDlivery stepTwoChecked={this.stepTwoChecked} />
              </div>
            </div>
            <div className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={() => this.showMenu(2)}
              >
                <span className="title-number">2.</span>
                <h2>Shipping and billing details</h2>
              </div>
              <div className={isChecked === 2 ? "block" : "none"}>
                <CheckOutAddr
                  stepThreeChecked={this.stepThreeChecked}
                  postChecked={this.postChecked}
                  postNumber={postNumber}
                  postAdress={postAdress}
                />
              </div>
            </div>
            <div name="CheckoutPaymentChecked" className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={() => this.showMenu(3)}
              >
                <span className="title-number">3.</span>
                <h2>Payment method</h2>
              </div>
              <div className={isChecked === 3 ? "block" : "none"}>
                <CheckoutPayment />
              </div>
            </div>
          </section>
          <section className="checkOut-mainRight">hello</section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CheckOut;
