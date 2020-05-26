import React, { Component } from "react";
import OrigTrunkPF from "../../images/Orig_Trunk_PF.jpg";
import OrigTrunkPS from "../../images/Orig_Trunk_PS.jpg";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ products: res.products }));
  }

  render() {
    return (
      <div>
        <div className="pdpWrapper">
          <div className="pdpTop flex">
            <div className="productImg"></div>
            <div className="productDetail center">
              <div className="pdHeader">
                <span className="upper">Original</span>
                <h1>Trunk XL</h1>
              </div>
              <div className="pdPrice">
                <span>1.530,00 €</span>
              </div>
              <div className="pdSize">Size Dropdown</div>
              <div className="pdAddToCart">
                <button>Purchase</button>
              </div>
              <div className="pdAvail">
                <span className="upper">Limited Stock</span>
              </div>
              <div className="pdOptions flexJustifyCenter">
                <div className="pdWisilist">Wishlist</div>
                <div className="pdFindStore">Find in store</div>
              </div>
              <div className="pdText">
                <p>
                  The unmistakable RIMOWA Original aluminium suitcase with its
                  distinctive grooves...
                </p>
              </div>
              <div className="pdAirline">See airline compatibility</div>
              <div className="pdColors flexJustifyCenter">
                <div>color1</div>
                <div>color2</div>
                <div>color3</div>
              </div>
            </div>
          </div>
          <div className="pdpBottom">
            <div className="pdpSpecs">
              <div className="specHeader center">
                <span className="upper">Specifications</span>
                <h3>Refined to the very last detail</h3>
              </div>
              <div className="specDetail flex">
                <div className="specImg">
                  <div className="specUnit upper">
                    <span className="metric">Metric</span>
                    <span className="imperial">Imperial</span>
                  </div>
                  <div className="specWire flexEnd">
                    <div className="wireLeft flex">
                      <div className="txtRotate1">Height</div>
                      <div className="txtRotate2">80CM</div>
                    </div>
                    <div className="wireCenter">
                      <img src={OrigTrunkPF} alt="" />
                      <div className="centerMeasure flexJustifyCenter">
                        <div className="measure">Width</div>
                        <div>43,5 CM</div>
                      </div>
                    </div>
                    <div className="wireRight">
                      <img src={OrigTrunkPS} alt="" />
                      <div className="flexJustifyCenter">
                        <div className="measure">Depth</div>
                        <div>46 CM</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="specDetails">Details</div>
              </div>
              <div className="specPN upper center">
                Product Number : 92585004
              </div>
            </div>
            <div className="pdpKey flex">
              <div className="keyImg">img</div>
              <div className="keyDetails">details</div>
            </div>
            <div className="pdpRecommend">pdpRecommend</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
