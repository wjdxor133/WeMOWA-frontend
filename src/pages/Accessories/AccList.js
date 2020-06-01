import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Accessories from '../../components/LugProduct/Accessories';
import './AccList.scss';



class AccList extends Component {

    state={
      selectValue: "",
      data: []
    };
   
  componentDidMount(){
      fetch("/data/data.json")
      .then((response) => response.json())
      .then((response) => this.setState({data: response.products}));
  }

  filterDropdownChange= (e) => {
    this.setState({ selectValue: e.target.value });
  }
  

  render() {
    const { data } = this.state;
    
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
                {data.map( product =>{
                return (<Accessories name={product.name} price={product.price} img={product.img} secondImg={product.secondImg}
                  color={product.colors} accImg={product.accImg} accSecond={product.accSecond} accPrice={product.accPrice}
                  accName={product.accName}
                />);})}
                
            </ul>
          </div>
        </main>
      </div>
    )
  };
};

export default withRouter(AccList);
