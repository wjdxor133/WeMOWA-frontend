import React, { Component } from "react";
import "./CheckOutAddr.scss";
import { faTheaterMasks } from "@fortawesome/free-solid-svg-icons";

class CheckOutAddr extends Component {
  state = {
    zipCode: undefined,
    city: undefined,
    phone: undefined,
    btnState: false,
    zipCodeChecked: false,
    cityChecked: false,
    phoneChecked: false,
  };

  valueChecked = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    // 우편번호 / 주소 / 핸드폰 번호 값 체크
    if (e.target.name === "zipCode" && e.target.value.length < 5) {
      this.setState({ zipCodeChecked: true });
    } else {
      this.setState({ zipCodeChecked: false });
    }

    if (e.target.name === "city" && e.target.value.length < 2) {
      this.setState({ cityChecked: true });
    } else {
      this.setState({ cityChecked: false });
    }

    if (e.target.name === "phone" && e.target.value.length < 6) {
      this.setState({ phoneChecked: true });
    } else {
      this.setState({ phoneChecked: false });
    }
    if (e.target.name === "phone" && e.target.value.length === 0) {
      this.setState({ zipCodeChecked: false });
    }

    // 비어있을 때 체크
    if (e.target.name === "zipCode" || e.target.value.length === 0) {
      this.setState({ zipCodeChecked: false });
    }

    if (e.target.name === "city" && e.target.value.length === 0) {
      this.setState({ cityChecked: false });
    }

    if (e.target.name === "phone" && e.target.value.length === 0) {
      this.setState({ phoneChecked: false });
    }
  };

  emptyChecked = (e) => {
    //onClick 이벤트 새로고침 방지하기 위해..
    e.preventDefault();

    if (
      this.state.zipCode === undefined &&
      this.state.city === undefined &&
      this.state.phone === undefined
    ) {
      this.setState(
        {
          zipCodeChecked: true,
          cityChecked: true,
          phoneChecked: true,
        },
        () => console.log(this.state.btnState)
      );
      // 1개 빈 값 조건
    } else if (
      this.state.zipCode === undefined &&
      this.state.city !== undefined &&
      this.state.phone !== undefined
    ) {
      this.setState({
        zipCodeChecked: true,
      });
    } else if (
      this.state.zipCode !== undefined &&
      this.state.city === undefined &&
      this.state.phone !== undefined
    ) {
      this.setState({
        cityChecked: true,
      });
    } else if (
      this.state.zipCode !== undefined &&
      this.state.city !== undefined &&
      this.state.phone === undefined
    ) {
      this.setState({
        phoneChecked: true,
      });
    }

    // 2개 빈 값 조건
    else if (
      this.state.zipCode === undefined &&
      this.state.city === undefined &&
      this.state.phone !== undefined
    ) {
      this.setState({
        zipCodeChecked: true,
        cityChecked: true,
      });
    } else if (
      this.state.zipCode !== undefined &&
      this.state.city === undefined &&
      this.state.phone === undefined
    ) {
      this.setState({
        cityChecked: true,
        phoneChecked: true,
      });
    } else if (
      this.state.zipCode == undefined &&
      this.state.city !== undefined &&
      this.state.phone === undefined
    ) {
      this.setState({
        zipCodeChecked: true,
        phoneChecked: true,
      });
    }
    // 3개 값이 비었을 때
    else if (
      this.state.cityChecked !== undefined &&
      this.state.zipCodeChecked !== undefined &&
      this.state.phoneChecked !== undefined
    ) {
      const { stepThreeChecked } = this.props;
      this.setState({
        zipCodeChecked: false,
        cityChecked: false,
        phoneChecked: false,
        btnState: true,
      });
      stepThreeChecked();
    }
  };

  render() {
    console.log("postCode", this.props);
    const { zipCodeChecked, cityChecked, phoneChecked } = this.state;
    const { postChecked, postNumber, postAdress } = this.props;
    return (
      <div className="CheckOutAddr">
        <form
          onSubmit={
            this.state.btnState
              ? this.props.stepThreeChecked
              : this.emptyChecked
          }
        >
          <div className="AddrOptions">
            <h4>Enter your delivery address:</h4>
            <div className="gender">
              <div>
                <input type="radio" name="gender" value="Mr" />
                <label>Mr</label>
              </div>
              <div>
                <input type="radio" name="gender" value="Mrs" />
                <label>Mrs</label>
              </div>
              <div>
                <input type="radio" name="gender" value="Ms" />
                <label>Ms</label>
              </div>
            </div>
            <div className="inputOption">
              <input type="text" placeholder="Jeongtaek" />
              <input type="text" placeholder="Lim" />
              <div className="address-serch">
                <input
                  className={zipCodeChecked ? "inputChecked" : "adress-detail"}
                  type="text"
                  placeholder="Zip code*"
                  name="zipCode"
                  onChange={this.valueChecked}
                  value={postNumber}
                />

                <div className="serchBtn" onClick={postChecked}>
                  <p>Search</p>
                </div>
              </div>
              <span
                style={
                  zipCodeChecked
                    ? { display: "block", color: "#C81F1F", fontSize: "0.7rem" }
                    : { display: "none" }
                }
              >
                Please enter at least 5 characters.
              </span>
              <input
                type="text"
                placeholder="Apt, Suite, Building (optional)"
                value={postAdress}
              />
              <input
                className={cityChecked ? "inputChecked" : null}
                type="text"
                placeholder="City*(상세주소 입력)"
                name="city"
                onChange={this.valueChecked}
              />
              <span
                style={
                  cityChecked
                    ? { display: "block", color: "#C81F1F", fontSize: "0.7rem" }
                    : { display: "none" }
                }
              >
                Please enter at least 2 characters.
              </span>
              <div className="countryBox">
                <p>Country</p>
                France
              </div>
              <input
                className={phoneChecked ? "inputChecked" : null}
                type="text"
                placeholder="Phone*"
                name="phone"
                onChange={this.valueChecked}
              />
              <span
                style={
                  phoneChecked
                    ? { display: "block", color: "#C81F1F", fontSize: "0.7rem" }
                    : { display: "none" }
                }
              >
                Please specify a valid phone number.
              </span>
            </div>
            <div className="CheckOutAddr-btn">
              <button>CONTINUE TO PAYMENT DETAILS</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckOutAddr;
