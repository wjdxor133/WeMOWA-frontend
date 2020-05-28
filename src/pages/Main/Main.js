import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import "./Main.scss";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="Main">
        <Header />
        <Nav />
        {/* 슬라이더 */}
        <div
          className="slider"
          style={{ width: "100%", height: "620px", backgroundColor: "green" }}
        ></div>
        <div className="main-slider">
          <div className="main-slider-title">
            <p className="title1">EXPLORE COLLECTIONS</p>
            <p className="title2">
              The perfect suitcase, 120 years in the making
            </p>
          </div>
          <div className="main-wrapper">{/* 컴포넌트 */}</div>
        </div>
      </div>
    );
  }
}

export default Main;
