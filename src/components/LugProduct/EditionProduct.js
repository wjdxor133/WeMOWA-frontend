import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './EditionProduct.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class EditionProduct extends Component {
    
    constructor(){
      super();
      this.state={
        isMouseOver: true,
        heartOver: false,
        product: "",
        colors: "",
        index: 0
      }
    }

    handleMouseOver = (idx) => {
      this.setState({
        isMouseOver: false,
        index: idx
      })
    }

    handleFirst = () => {

    }

    handleMouseOut = () =>{
      this.setState({
        isMouseOver: true,
        index: 0
      })
      
    }

    handleColorImage = (idx) => {
      this.setState({
        index: idx
      },() => {

        if(this.state.index === 0) {
          this.setState({
            colors: this.props.color[0].img_url,
            isMouseOver: false
          })
        } else if (this.state.index === 1) {
          this.setState({
            colors: this.props.color[1].img_url,
            isMouseOver: false
          })
        } else if (this.state.index ===2){
          this.setState({
            colors: this.props.color[2].img_url,
            isMouseOver: false
          })
        } else if (this.state.index ===3){
          this.setState({
            colors: this.props.secondImg,
            isMouseOver: false
          })
        }
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
                                <img src= {this.state.isMouseOver ? this.props.img : this.state.colors}
                                   onMouseEnter={() => this.handleColorImage(3)} onMouseLeave={this.handleMouseOut}
                                   className="LimitedImage" 
                                   alt=""/>
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
                            {this.state.isMouseOver ? null : <FontAwesomeIcon icon={faHeart}/> }
                            
                        </div>
                        <div className="ProductSwatch">
                          <ul className="SwatchList">
                              <li className="SwatchBlack" onMouseEnter={() => this.handleColorImage(0)} onMouseLeave={this.handleMouseOut}>
                                <a href=" ">
                                  <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw970d1792/images/swatch/dior_black.png"
                                  className="SwatchImage" alt=""/>
                                </a>
                              </li>
                              <li className="SwatchSilver" onMouseEnter={() => this.handleColorImage(1)} onMouseLeave={this.handleMouseOut}>
                                <a href=" ">
                                  <img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dw34e11479/images/swatch/dior_silver.png"
                                  className="SwatchImage" alt=""></img>
                                </a>
                              </li>
                              <li className="SwatchBlue" onMouseEnter={() => this.handleColorImage(2)} onMouseLeave={this.handleMouseOut}>
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