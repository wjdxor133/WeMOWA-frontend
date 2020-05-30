import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './CheckPrice.scss';



class  CheckPrice extends Component {
    constructor(){
        super();
        this.state={

            radioGroup: {
                a: false,
                b: false,
                c: false,
                d: false,
                e: false,
                f: false,
                g: false,
                h: false
              }
        };
        this.handleRadio = this.handleRadio.bind(this);
    }

    handleRadio(e) {
        let obj = {}
        obj[e.target.value] = e.target.checked // true
        this.setState({radioGroup: obj})
    }

    render() { 
        return (  
        <ul className="PriceCheck">
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='a' 
                checked={this.state.radioGroup['a']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €200 - €400
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='b' 
                checked={this.state.radioGroup['b']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                     €400 - €600
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='c' 
                checked={this.state.radioGroup['c']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €600 - €800
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='d' 
                checked={this.state.radioGroup['d']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €800 - €1000
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='e' 
                checked={this.state.radioGroup['e']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €1000 - €17000
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='f' 
                checked={this.state.radioGroup['f']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €1700 - €20000
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='g' 
                checked={this.state.radioGroup['g']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €20000 - €27000
                </a>
            </label>
            <label className="OnePrice">
                <input type="checkbox" name="radioGroup" value='h' 
                checked={this.state.radioGroup['h']} 
                onChange={this.handleRadio} className="PointCheck"/>
                <a href=" " className="PointPrice">
                    
                    €2700 +
                </a>
            </label>
        </ul>    


        );
    }
}
 

export default withRouter(CheckPrice);