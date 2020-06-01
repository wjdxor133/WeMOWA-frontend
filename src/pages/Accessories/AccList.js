import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Accessories from '../../components/LugProduct/Accessories';
import DropdownLugg from '../../components/LugProduct/DropdownLugg';
import CheckPrice from '../../components/LugProduct/CheckPrice';
import CheckCollect from '../../components/LugProduct/CheckCollect';
import './AccList.scss';



class AccList extends Component {
  constructor(){
    super();
    this.state={
      selectValue: "",
      data: [],
      isToggleOn: false
    };
    this.filterDropdownChange = this.filterDropdownChange.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  filterDropdownChange(e){
    this.setState({ selectValue: e.target.value });
  }

  handleDropdown(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

  }
  
  componentDidMount(){
    fetch("/data/JHdata.json")
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
                  <button onClick={this.handleDropdown} className="ToggleButton">FILTER</button>
                  {this.state.isToggleOn ?(
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                            <div className="PriceFilter">
                                <span>PRICE</span>
                                <CheckPrice/>
                            </div>
                            <div className="CollectionFilter">
                                <span>PRODUCT COLLENTION</span>
                                <CheckCollect/>
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
                {this.state.data.map( product =>{
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
