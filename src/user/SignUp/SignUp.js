import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitleDD from "./TitleDD";
import CountryDD from "./CountryDD";

import "./signup.scss";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  pw1: "",
  pw2: "",
  pwtype: "password",
  visibility: "Show",
  personalData: false,
  privacy: false,
  fnameError: "",
  lnameError: "",
  emailError: "",
  pw1Error: "",
  pw2Error: "",
};

class Signup extends Component {
  state = initialState;

  //input 값을 state 에 넣어주기
  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePersonalData = () => {
    this.setState((initialState) => ({
      personalData: !initialState.personalData,
    }));
  };

  handlePrivacy = () => {
    this.setState((initialState) => ({
      privacy: !initialState.privacy,
    }));
  };

  //form validation 조건
  validate = () => {
    let fnameError = "";
    let lnameError = "";
    let emailError = "";
    let pw1Error = "";
    let pw2Error = "";

    if (!this.state.fname) {
      //first name 이 비었을경우
      fnameError = "First name is required";
    }

    if (!this.state.lname) {
      //last name 이 비었을경우
      lnameError = "Last name is required";
    }

    if (!this.state.email.includes("@")) {
      //email 에 @가 없을경우
      emailError = "Please enter valid email address";
    }

    if (!this.state.pw1.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      //pw 가 8글자 이상, 숫자 포함, uppercase, lower case 포함이 되지 않았을때
      pw1Error = "Please enter valid password";
    }

    if (this.state.pw2 !== this.state.pw1) {
      //confirm password
      pw2Error = "Password doesn't match";
    }

    if (fnameError || lnameError || emailError || pw1Error || pw2Error) {
      //if they contain error message
      this.setState({ fnameError, lnameError, emailError, pw1Error, pw2Error }); //setState to error message
      return false; //validate() is false, !isValid, show errormsg
    }

    return true; // validate() is true, isVaalid, setState(initialState)
  };

  handlePW = () => {
    //show-hide password
    const { pwtype } = this.state;
    if (pwtype === "password") {
      this.setState({ pwtype: "text", visibility: "hide" });
    } else {
      this.setState({ pwtype: "password", visibility: "show" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
    /*
    fetch('address', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.pw,
        privacy: this.state.privacy
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.message === "SUCCESS"){
        alert ("Signup Success!");
        thisprops.history.push("/accountpage")
      }
    })
    */
  };

  render() {
    return (
      <div className="Login">
        <div className="mainRow flexJustifyCenter">
          <div className="signup">
            <h3 className="txtUpper center">Create a Rimowa Account</h3>
            <form
              className="signInForm flexColumnCenter"
              onSubmit={this.handleSubmit}
            >
              <div className="inputWrapper flex">
                <div className="left">
                  <TitleDD />
                </div>
                <div className="right">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name*"
                    value={this.state.fname}
                    onChange={this.handleInput}
                  />
                  <p className="showError center">{this.state.fnameError}</p>
                </div>
              </div>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={this.state.lname}
                  onChange={this.handleInput}
                />
                <p className="showError center">{this.state.lnameError}</p>
              </div>
              <div className="countryDD">
                <CountryDD />
              </div>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address*"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
                <p className="showError center">{this.state.emailError}</p>
              </div>
              <div className="inputWrapper">
                <input
                  type={this.state.pwtype}
                  name="pw1"
                  placeholder="Password*"
                  value={this.state.pw1}
                  onChange={this.handleInput}
                />
                <span className="togglePW" onClick={this.handlePW}>
                  {this.state.visibility}
                </span>
                <p className="showError center">{this.state.pw1Error}</p>
                <p className="passwordreq center">
                  The password must contain at least 8 characters including 1
                  number, 1 upper and 1 lower case letter
                </p>
              </div>
              <div className="inputWrapper">
                <input
                  type="password"
                  name="pw2"
                  placeholder="Confirm Password*"
                  value={this.state.pw2}
                  onChange={this.handleInput}
                />
                <p className="showError center">{this.state.pw2Error}</p>
              </div>
              <div className="checkWrapper flex">
                <div className="left">
                  <input
                    type="checkbox"
                    checked={this.state.personalData}
                    onChange={this.handlePersonalData}
                  />
                </div>
                <div className="right">
                  <p>
                    I consent to RIMOWA processing my personal data in order to
                    send personalised marketing material in accordance with the
                    consent form and the privacy policy.
                  </p>
                </div>
              </div>
              <div className="checkWrapper flex">
                <div className="left">
                  <input
                    type="checkbox"
                    checked={this.state.privacy}
                    onChange={this.handlePrivacy}
                  />
                </div>
                <div className="right">
                  By clicking "create account", I consent to the privacy policy.
                </div>
              </div>
              <button onClick={this.handleClick}>Create Account</button>
            </form>
            <div className="caption center">
              <p>By creating an account, you agree to our:</p>{" "}
              <p>
                <Link to="">TERMS OF CONDITIONS</Link> |
                <Link to="">PRIVACY POLICY</Link>
              </p>
            </div>
            <div className="signin center">
              <p>
                <Link to="">ALREADY HAVE AN ACCOUNT?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
