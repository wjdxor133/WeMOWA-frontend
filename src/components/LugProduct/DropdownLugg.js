import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import './DropdownLugg.scss';

class DropdownLugg extends Component {
    
    constructor(){
      super();
      this.state={
        isMouseOver: false
      
      }
    }

    handleMouseOver = () => {
      this.setState({
        isMouseOver: true
      })
    }

    
    render() { 
  
        return ( 
            <ul className="ColorSwatches">
              <li className="OneColor">
                  <a href=" ">
                  <img src={this.props.lugColor} className="PointColor" alt=""/>
                  </a>
                  <span className="PointName">
                    {this.props.colorName}
                  </span>
              </li>
          </ul>
         );
    }
}
 
export default withRouter(DropdownLugg);