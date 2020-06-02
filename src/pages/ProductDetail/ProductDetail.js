import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import SizesDD from "./SizesDD";
import { AccordionSpec } from "../../components/Accordion/Accordion";
import OrigTrunkPF from "../../images/Orig_Trunk_PF.jpg";
import OrigTrunkPS from "../../images/Orig_Trunk_PS.jpg";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  state = {
    product: {},
    accordion: [
      {
        id: 0,
        title: "Specifications",
        specs: {
          weight: "Weight: 6.8 KG",
          volume: "130 L",
        },
      },
      {
        id: 1,
        title: "Materials",
        text:
          "Packed items are kept in perfect order during transit with the height adjustable Flex Divider, which can be adapted to suit your belongings.",
      },
    ],
    wishlist: false,
  };

  componentDidMount() {
    fetch("/data/pd_data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ product: res.product }));
  }

  handleWishlist = () => {
    this.setState((prev) => ({ wishlist: !prev.wishlist }));
  };

  handleColor = () => {};

  render() {
    const { product_number } = this.state.product;
    const { collection } = this.state.product;
    const { name } = this.state.product;
    const { amount } = this.state.product;
    const { description } = this.state.product;
    return (
      <div className="ProductDetail">
        <Header />
        <Nav />
        <div className="pdpTop">
          <div className="productImg">
            <Carousel
              className="imgCarousel"
              renderBottomCenterControls={({ currentSlide }) => (
                <div>{null}</div>
              )}
              renderCenterLeftControls={({ previousSlide }) => (
                <button className="productSliderBtn" onClick={previousSlide}>
                  <i className="fa fa-arrow-left" />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button className="productSliderBtn" onClick={nextSlide}>
                  <i className="fa fa-arrow-right" />
                </button>
              )}
            >
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwd17c0765/images/large/92585004_1.png"
                alt=""
              />
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw8613f24b/images/large/92585004_2.png"
                alt=""
              />
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwe5e28c87/images/large/92585004_3.png"
                alt=""
              />
            </Carousel>
            <div className="productLabel flex">
              <div className="pdDiamond"></div>
              <div className="pdTxtUpper">New</div>
            </div>
          </div>
          <div className="productDetail center">
            <div className="pdInfo">
              <div className="pdHeader">
                <span className="subHeader">{collection && collection}</span>
                <h1>{name && name}</h1>
              </div>
              <div className="pdPrice">
                <span>{`${amount && amount} €`}</span>
              </div>
            </div>

            <div className="pdSelectSize">
              <SizesDD products={this.state.product} />
            </div>
            <div className="pdAddToCart">
              <button>Purchase</button>
            </div>
            <div className="pdAvail">
              <span className="pdTxtUpper">Limited Stock</span>
            </div>
            <div className="pdOptions flexJustifyCenter">
              <div
                className="pdWishlist flexCenter"
                onClick={this.handleWishlist}
              >
                <i
                  className={`${
                    this.state.wishlist ? "fas fa-heart" : "far fa-heart"
                  }`}
                ></i>
                <div className="pdML3 pdUnderline">Add to Wishlist</div>
              </div>

              <div className="pdStore flexCenter">
                <i className="fas fa-store"></i>
                <div className="pdML3 pdUnderline">Find in store</div>
              </div>
            </div>
            <div className="pdText">
              <p>{description && description}</p>
            </div>
            <div className="pdColors flexJustifyCenter">
              {this.state.product[0] &&
                this.state.product[0].color.map((color) => (
                  <div
                    className="pdML3 colorPalette"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="pdpBottom">
          <div className="pdpSpecs">
            <div className="sectionHeader center">
              <span className="subHeader">Specifications</span>
              <h1>Refined to the very last detail</h1>
            </div>
            <div className="specDetail flex">
              <div className="specImg">
                <div className="specUnit pdTxtUpper">
                  <span className="metric">Metric</span>
                  <span className="imperial">Imperial</span>
                </div>
                <div className="specWire flexEnd">
                  <div className="wireLeft flex">
                    <div className="specHeight flexColumnCenter">
                      <div className="height">
                        <div className="center">Height</div>
                        <div className="center">80CM</div>
                      </div>
                    </div>
                    <div>
                      <img src={OrigTrunkPF} alt="" />
                      <div className="specWidth flexJustifyCenter">
                        <div className="width">
                          <span>Width</span>
                          <span>43,5 CM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wireRight">
                    <img src={OrigTrunkPS} alt="" />
                    <div className="specDepth flexJustifyCenter">
                      <div className="depth">
                        <span>Depth</span>
                        <span>43,5 CM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="specDetails">
                {this.state.accordion.map((m) => {
                  return (
                    <AccordionSpec
                      key={m.id}
                      title={m.title}
                      specs={m.text}
                      list={m}
                    />
                  );
                })}
              </div>
            </div>
            <div className="specPN pdTxtUpper center">
              Product Number : {product_number && product_number}
            </div>
          </div>
          <div className="pdpKey flex">
            <div className="keyImg flexJustifyCenter">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dw76fdeeb1/images/PDP-features/Detail-TSA--Original-Trunk-XL-Silver.png"
                alt=""
              />
            </div>
            <div className="keyAccor">
              <div className="sectionHeader center">
                <span className="subHeader">Specifications</span>
                <h1>Engineered for travel</h1>
              </div>
              {this.state.accordion.map((m) => {
                return (
                  <AccordionSpec
                    key={m.id}
                    title={m.title}
                    specs={m.text}
                    list={m}
                  />
                );
              })}
            </div>
          </div>
          <div className="pdpRecommend">pdpRecommend</div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
