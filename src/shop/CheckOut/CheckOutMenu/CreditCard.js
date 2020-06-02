import React, { Component } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreditCard.scss";

class CreditCard extends Component {
  state = {
    cardNumber: undefined,
    cardName: undefined,
    cardCvv: undefined,
    cardChecked: false,
  };

  cardValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  cardChecked = (e) => {
    e.preventDefault();
    const { cardNumber, cardName, cardCvv } = this.state;
    if (
      cardNumber === undefined &&
      cardName === undefined &&
      cardCvv === undefined
    ) {
      this.setState({ cardChecked: true });
    }
  };

  render() {
    const { creditCardCheck } = this.props;
    const { cardChecked } = this.state;
    return (
      <div
        className="CreditCard"
        style={{ display: creditCardCheck ? "block" : "none" }}
      >
        <form onClick={this.cardChecked}>
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
              <input
                name="cardNumber"
                placeholder="Number*"
                onChange={this.cardValue}
              />
              <span
                style={{
                  display: cardChecked ? "block" : "none",
                  fontSize: "0.7rem",
                  color: "#C81F1F",
                }}
              >
                This filed required.
              </span>
              <input
                name="cardName"
                placeholder="Name on card*"
                onChange={this.cardValue}
              />
              <span
                style={{
                  display: cardChecked ? "block" : "none",
                  fontSize: "0.7rem",
                  color: "#C81F1F",
                }}
              >
                This filed required.
              </span>
              <div className="card-Validity">
                <input placeholder="MM" />
                <input placeholder="YY" />
                <div className="card-ValidityOption">
                  <input
                    name="cardCvv"
                    placeholder="CVV*"
                    onChange={this.cardValue}
                  />
                  <span
                    style={{
                      display: cardChecked ? "block" : "none",
                      fontSize: "0.7rem",
                      color: "#C81F1F",
                    }}
                  >
                    This filed required.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="CreditCard-btn">
            <button>
              <span>CONTINUE</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreditCard;
