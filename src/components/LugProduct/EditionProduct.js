import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './EditionProduct.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class EditionProduct extends Component {
    
    constructor(){
      super();
      this.state={
        isMouseOver: false,
        heartOver: false
      }
    }

    handleMouseOver = (props) => {
      this.setState({
        isMouseOver: true
      })
    }


    render() { 
      console.log(this.props.color[0].img_url);
        return ( 
            <li className="CabinLimited">
                    <div className="LimitedThumb">
                        <div className="LimitedBody">
                            <a href=" "className="ProductLink">
                                <div className="ProductImage">
                                <img src={this.state.isMouseOver ? this.props.secondImg : this.props.img}
                                  className="LimitedImage" 
                                  onMouseEnter={this.handleMouseOver}
                                  onMouseOut={() => {this.setState({isMouseOver : false})}} alt=""/>
                                </div>
                                <div className="ProductCat">DIOR AND RIMOWA</div>
                                <div className="ProductRyme">{this.props.name}</div>
                            </a>
                            <div className="ProductPrice">
                              <span >{this.props.price} €</span>
                            </div>
                            <div className="ProductPromo"></div>
                        </div>
                        <div className="LimitedWish">
                          <FontAwesomeIcon icon={faHeart} onMouseEnter={this.handleMouseOver}/>
                        </div>
                        <div className="ProductSwatch">
                          <ul className="SwatchList">
                              <li className="SwatchBlack" onMouseEnter={this.handleMouseOver}>
                                <a href=" ">
                                  <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw970d1792/images/swatch/dior_black.png"
                                  className="SwatchImage" alt=""></img> 
                                </a>
                              </li>
                              <li className="SwatchSilver">
                                <a href=" ">
                                  <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw34e11479/images/swatch/dior_silver.png"
                                  className="SwatchImage" alt=""></img>
                                </a>
                              </li>
                              <li className="SwatchBlue">
                                <a href=" ">
                                  <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwc0102692/images/swatch/gradient_blue.png"
                                  className="SwatchImage" alt=""></img>
                                </a>
                              </li>
                          </ul>
                        </div>
                        <div className="ProductBadge">
                          <div className="IconTag"></div>
                          <div className="TagName">LIMITED EDITION</div>
                        </div>
                    </div>  
                </li>
         );
    }
}
 
export default withRouter(EditionProduct);