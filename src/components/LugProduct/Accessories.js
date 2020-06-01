import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './Accessories.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Accessories extends Component {
  
  
      state={
        isMouseOver: false

      }
    

    handleMouseOver = () => {
      this.setState({
        isMouseOver: true
      })
    }


    render() { 
      const { isMouseOver} =this.state;
        return ( 
            <li className="CabinLimited">
                    <div className="LimitedThumb">
                        <div className="LimitedBody">
                            <a href=" "className="ProductLink">
                                <div className="ProductImage">
                                <img src={isMouseOver ? this.props.accSecond : this.props.accImg}
                                  className="LimitedImage" 
                                  onMouseEnter={this.handleMouseOver}
                                  onMouseOut={() => {this.setState({isMouseOver : false})}} alt=""/>
                                </div>
                                <div className="ProductCat">ACCESSORIES</div>
                                <div className="ProductRyme">{this.props.accName}</div>
                            </a>
                            <div className="ProductPrice">
                              <span >{this.props.accPrice} €</span>
                            </div>
                            <div className="ProductPromo"></div>
                        </div>
                        <div className="LimitedWish">
                          <FontAwesomeIcon icon={faHeart} onMouseEnter={this.handleMouseOver}/>
                        </div>
                        <div className="ProductSwatch">
     
                        </div>
                        <div className="ProductBadge">
                          
                        </div>
                    </div>  
                </li>
         );
    }
}
 
export default withRouter(Accessories);