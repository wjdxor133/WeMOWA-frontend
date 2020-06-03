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
  };

  showDlivery = () => {
    this.setState({
      DliveryCehcked: true,
      AddrChecked: false,
      PaymentChecked: false,
    });
  };

  showAddr = () => {
    this.setState({
      AddrChecked: true,
      DliveryCehcked: false,
      PaymentChecked: false,
    });
  };

  showPayment = () => {
    this.setState({
      PaymentChecked: true,
      AddrChecked: false,
      DliveryCehcked: false,
    });
  };

  outDlivery = (e) => {
    this.setState({
      DliveryCehcked: false,
    });
  };

  outAddr = () => {
    this.setState({
      AddrChecked: false,
    });
  };

  outPayment = () => {
    this.setState({ PaymentChecked: false });
  };

  stepTwoChecked = () => {
    this.setState({
      PaymentChecked: false,
      AddrChecked: true,
      DliveryCehcked: false,
    });
  };

  stepThreeChecked = () => {
    this.setState({
      PaymentChecked: true,
      AddrChecked: false,
      DliveryCehcked: false,
    });
  };

  // 우편번호 기능
  handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    console.log(data);
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
        console.log(extraAddress);
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress);
    this.setState(
      { postNumber: data.zonecode, postAdress: fullAddress },
      () => {
        console.log(
          "postNumber",
          this.state.postNumber,
          "postAdress",
          this.state.postAdress
        );
      }
    );
    this.postChecked();
  };

  postChecked = () => {
    this.setState({ postChecked: !this.state.postChecked }, () => {
      console.log(this.state.postChecked);
    });
  };

  render() {
    const {
      DliveryCehcked,
      AddrChecked,
      PaymentChecked,
      postChecked,
      postNumber,
      postAdress,
    } = this.state;

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
                onClick={DliveryCehcked ? this.outDlivery : this.showDlivery}
              >
                <span className="title-number">1.</span>
                <h2>Delivery and pickup options</h2>
              </div>
              <div style={{ display: DliveryCehcked ? "block" : "none" }}>
                <CheckOutDlivery stepTwoChecked={this.stepTwoChecked} />
              </div>
            </div>
            <div className="CheckOutMenu-item">
              <div
                className="CheckOutMenu-title"
                onClick={AddrChecked ? this.outAddr : this.showAddr}
              >
                <span className="title-number">2.</span>
                <h2>Shipping and billing details</h2>
              </div>
              <div style={{ display: AddrChecked ? "block" : "none" }}>
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
                onClick={PaymentChecked ? this.outPayment : this.showPayment}
              >
                <span className="title-number">3.</span>
                <h2>Payment method</h2>
              </div>
              <div style={{ display: PaymentChecked ? "block" : "none" }}>
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
