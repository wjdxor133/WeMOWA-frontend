import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './Accessories.scss';
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Accessories extends Component {
    
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
                                <img src={this.state.isMouseOver ? this.props.accImg : this.props.accSecond}
                                  className="LimitedImage" 
                                  onMouseEnter={() => this.handleColorImage(3)} onMouseLeave={this.handleMouseOut}
                                  alt=""/>
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
                            {this.state.isMouseOver ? null : <FontAwesomeIcon icon={faHeart}/> }
                            
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