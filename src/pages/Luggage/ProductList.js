import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import EditionProduct from '../../components/LugProduct/EditionProduct';
import CabinProduct from '../../components/LugProduct/CabinProduct';
import DropdownLugg from '../../components/LugProduct/DropdownLugg';
import './ProductList.scss';




class ProductList extends Component {

    state={
      selectValue: "",
      data: [],
      isToggleOn: false
    }

  componentDidMount(){
    fetch("/data/data.json")
    .then((response) => response.json())
    .then((response) => this.setState({data: response.products}));
  }

  handleDropdown = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));

  }

  render() {
    const { data , isToggleOn} = this.state;

    return(
      <div className="List">
        <header className="header">
          <div className="banner">
          <nav className="navigation">
            <div className="menu">
            </div>
          </nav>
          </div>
        </header>
        
        <main className="ListMain">
          <div className="ListTop">
            <div className="ListFilter">
              <div className="FilterToggle">
                  <button onClick={this.handleDropdown} className="ToggleButton">FILTER</button>
                  {isToggleOn ?(
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                            <div className="ColorFilter">
                                <span>Color</span>
                                {data.map( product =>{
                                return (<DropdownLugg colorName={product.colorName} lugColor={product.lugColor}
                                />);})} 
                            </div>
                            <div className="PriceFilter">
                                <span>PRICE</span>
                                <ul className="PriceCheck">
                                    <li className="OnePrice">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointPrice">
                                            €200 - €400
                                        </a>
                                    </li>
                                    <li className="OnePrice">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointPrice">
                                            €400 - €600
                                        </a>
                                    </li>
                                    <li className="OnePrice">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointPrice">
                                            €600 - €800
                                        </a>
                                    </li>
                                    <li className="OnePrice">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointPrice">
                                            €1000+
                                        </a>
                                    </li>
                                    <li className="OnePrice">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointPrice">
                                            €200 - €400
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="CollectionFilter">
                                <span>PRODUCT COLLENTION</span>
                                <ul className="CollectionCheck">
                                    <li className="OneCollection">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointCollection">
                                            CLASSIC
                                        </a>
                                    </li>
                                    <li className="OneCollection">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointCollection">
                                            DIOR AND RIMOWA
                                        </a>
                                    </li>
                                    <li className="OneCollection">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointCollection">
                                            ESSENTIAL
                                        </a>
                                    </li>
                                    <li className="OneCollection">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointCollection">
                                            ESSENTIAL LITE
                                        </a>
                                    </li>
                                    <li className="OneCollection">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointCollection">
                                            ESSENTIAL SLEEVE
                                        </a>
                                    </li>
                                    <li className="OneCollection">
                                        <span className="PointCheck"></span>
                                        <a href=" " className="PointCollection">
                                            HYBRID
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="DropdownSub">
                                <div className="CancleBox">
                                <button className="CancelBtn">CANCEL</button>
                                </div>
                                <div className="ApplyBox">
                                <button className="RESETBtn">RESET</button>
                                <button className="APPLYBtn">APPLY</button>
                                </div>    
                        </div>
                    </div>
                  ) : (null)
                  }
              </div>
              <div className="TopSeller">
                <div className="Seller">
                  <span className="SortBy">SORT BY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ListContainer">
            <ul className="ListCabin">
                <CabinProduct/> 

                {data.map( product =>{
                return (<EditionProduct name={product.name} price={product.price} img={product.img} secondImg={product.secondImg}
                  color={product.colors}
                />);})}

                <CabinProduct/>
            </ul>
          </div>
        </main>
      </div>
    )
  };
};

export default withRouter(ProductList);
