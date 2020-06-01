import React, { Component } from "react";
import CheckoutPayment from "./CheckoutPayment";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreditCard.scss";

class CreditCard extends Component {
  render() {
    const { creditCardCheck } = this.props;
    return (
      <div
        className="CreditCard"
        style={{ display: creditCardCheck ? "block" : "none" }}
      >
        <div className="credit-back" onClick={this.props.return}>
          <FontAwesomeIcon className="arrow" icon={faArrowLeft} />
          <span>Choose another payment method</span>
        </div>
        <div className="CreditCard-items">
          <h4>Enter your card informations:</h4>
          <div className="card-img">
            <img
              src="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dwad397d8e/images/creditcards2/visa.png"
              alt="visa.png"
            ></img>
            <img
              src="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dw7d1e7dd9/images/creditcards2/mastercard.png"
              alt="mastercard.png"
            ></img>
            <img
              src="https://www.rimowa.com/on/demandware.static/Sites-Rimowa-Site/-/default/dwc61d67bd/images/creditcards2/amex.png"
              alt="amex.png"
            ></img>
            <span>Accepted cards</span>
          </div>
          <div className="card-input">
            <input placeholder="Number*" />
            <input placeholder="Name on card*" />
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
