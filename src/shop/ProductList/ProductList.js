import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import EditionProduct from '../../components/LugProduct/EditionProduct';
import CabinProduct from '../../components/LugProduct/CabinProduct';
import './ProductList.scss';




class ProductList extends Component {
  constructor(){
    super();
    this.state={
      selectValue: "",
      data: []
    };
    this.filterDropdownChange = this.filterDropdownChange.bind(this);
  }

  filterDropdownChange(e){
    this.setState({ selectValue: e.target.value });
  }
  
  componentDidMount(){
    fetch("/data/data.json")
    .then((response) => response.json())
    .then((response) => this.setState({data: response.products}));
  }


  render() {
    console.log(this.state.data);
    
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
                  <button onChange={this.filterDropdownChange} className="ToggleButton">FILTER</button>
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

                {this.state.data.map( product =>{
                return (<EditionProduct name={product.name} price={product.price} img={product.img} secondImg={product.secondImg}
                  color={product.colors}
                />);})}

                {this.state.data.map( product =>{
                return (<EditionProduct name={product.name} price={product.price} img={product.img} secondImg={product.secondImg}
                  color={product.colors}
                />);})}
                {this.state.data.map( product =>{
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
