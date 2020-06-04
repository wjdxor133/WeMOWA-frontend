import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CheckBox from './CheckBox';
import './CheckPrice.scss';



class  CheckPrice extends Component {
    constructor(){
        super();
        this.state={

            price:[
                {id: 1, value: "€200 - €400", isChecked: false},
                {id: 2, value: "€400 - €600", isChecked: false},
                {id: 3, value: "€600 - €800", isChecked: false},
                {id: 4, value: "€800 - €1000", isChecked: false},
                {id: 5, value: "€800 - €1000", isChecked: false}
              ]
        };
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e) {
        let obj = {}
        obj[e.target.value] = e.target.checked // true
        this.setState({radioGroup: obj})
    }

    handleAllChecked = (event) => {
        let price = this.state.price
        price.forEach(price => price.isChecked = event.target.checked) 
        this.setState({price: price})
      }
    
      handleCheckChieldElement = (event) => {
        let price = this.state.price
        price.forEach(price => {
           if (price.value === event.target.value)
           price.isChecked =  event.target.checked
        })
        this.setState({price: price})
      }

    render() { 
        
        return (  
            <ul className="PriceCheck">
                {   
                    this.state.price.map((prices) => {
                        return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...prices} />)
                    })
                }
            </ul>

        );
    }
}
 

export default withRouter(CheckPrice);