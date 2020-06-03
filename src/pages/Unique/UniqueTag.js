import React, { Component } from "react";
import UniqueATC from "./UniqueATC";
import "./UniqueTag.scss";

// tagColorImage
const tagColorMenu = {
  black:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwb781c4ec/images/customization/tagviewrectangle/Black.png",
  paprika:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw3c19948b/images/customization/tagviewrectangle/Paprika.png",
  ocean:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw1f2673a8/images/customization/tagviewrectangle/Ocean.png",
  honey:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw3ff1b999/images/customization/tagviewrectangle/Honey.png",
  azure:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw84aecf4a/images/customization/tagviewrectangle/Azure.png",
  lagoon:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw6fa99d5b/images/customization/tagviewrectangle/Lagoon.png",
  blush:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw51720f15/images/customization/tagviewrectangle/Blush.png",
  clementine:
    "https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwfd009b32/images/customization/tagviewrectangle/Clementine.png",
};

class UniqueTag extends Component {
  state = {
    selectedColor: "paprika",
    addText: false,
  };

  handleChange = (value) => {
    this.setState({ selectedColor: value });
  };

  addTextMenu = () => {
    this.setState({ addText: true });
  };

  render() {
    const { selectedColor, addText } = this.state;
    console.log(addText);
    return (
      <div className="UniqueTag">
        <div className="utHeaderWrapper flexSpaceBetween">
          <div className="left txtUpper flexCenter">
            <i className="fas fa-arrow-left"></i>
            <span className="pdML3">Back to shop</span>
          </div>
          <div className="center">RIMOWA</div>
          <div className="right"></div>
        </div>
        <div className="utWrapper">
          <div className="utTag">
            <div className="utImgWrapper">
              <img src={tagColorMenu[selectedColor]} />
              {/* addText가 true이면 텍스트 추가 버튼 사라짐 */}
              <p
                className={addText ? "addText remove" : "addText"}
                onClick={this.addTextMenu}
              >
                add Text
              </p>
              <div className="utCustomText">
                <ul className="utCharacters flexJustifyCenter">
                  <li>M</li>
                  <li>I</li>
                  <li>N</li>
                </ul>
              </div>
            </div>
            <div className="utAddText">
              <div className="utStartBtn flexCenter">
                <i className="fas fa-plus"></i>
              </div>
              <span className="utStartText txtUpper">add text and symbol</span>
            </div>
          </div>
          {/* addText가 true이면 색상 메뉴 사라짐 */}
          <div
            className="utPicker"
            style={{ display: addText ? "none" : "block" }}
          >
            <form
              className="utPickWrapper flex"
              onChange={(e) => {
                this.handleChange(e.target.value);
              }}
            >
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioBlack"
                  name="radioColor"
                  value="black"
                />
                <label htmlFor="radioBlack" className="black"></label>
                <div className="utColorName">Black</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioPaprika"
                  name="radioColor"
                  value="paprika"
                  checked={this.state.selectedColor === "paprika"}
                />
                <label htmlFor="radioPaprika" className="paprika"></label>
                <div className="utColorName">Paprika</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioOcean"
                  name="radioColor"
                  value="ocean"
                />
                <label htmlFor="radioOcean" className="ocean"></label>
                <div className="utColorName">Ocean</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioHoney"
                  name="radioColor"
                  value="honey"
                />
                <label htmlFor="radioHoney" className="honey"></label>
                <div className="utColorName">Honey</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioAzure"
                  name="radioColor"
                  value="azure"
                />
                <label htmlFor="radioAzure" className="azure"></label>
                <div className="utColorName">Azure</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioLagoon"
                  name="radioColor"
                  value="lagoon"
                />
                <label htmlFor="radioLagoon" className="lagoon"></label>
                <div className="utColorName">Lagoon</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioBlush"
                  name="radioColor"
                  value="blush"
                />
                <label htmlFor="radioBlush" className="blush"></label>
                <div className="utColorName">Blush</div>
                <div className="utColorPrice">60€</div>
              </div>
              <div className="utChoice">
                <input
                  type="radio"
                  id="radioClementine"
                  name="radioColor"
                  value="clementine"
                />
                <label htmlFor="radioClementine" className="clementine"></label>
                <div className="utColorName">Clementine</div>
                <div className="utColorPrice">60€</div>
              </div>
            </form>
          </div>
          <div className="addTextOption">
            <p>ABC</p>
            <ul className="addTextList">
              <li>WECODE</li>
              <li>RIMOWA</li>
              <li>taek2</li>
            </ul>
          </div>
        </div>
        {/* end utWrapper */}
        <div className="atcComponent">
          <UniqueATC />
        </div>
      </div>
    );
  }
}

export default UniqueTag;
