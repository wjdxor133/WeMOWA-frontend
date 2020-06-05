import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import EditionProduct from '../../components/LugProduct/EditionProduct';
import CabinProduct from '../../components/LugProduct/CabinProduct';
import DropdownLugg from '../../components/LugProduct/DropdownLugg';
import CheckPrice from '../../components/LugProduct/CheckPrice';
import CheckCollect from '../../components/LugProduct/CheckCollect';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './ProductList.scss';




class ProductList extends Component {
  constructor(){
    super();
    this.state={
      selectValue: "",
      data: [],
      isToggleOn: false,
      isSortOn: false,
      hwan: "",
      ata: [],
      fixColor: "",
      num: 0
    }
  }

  componentDidMount = () => {
    fetch("http://10.58.2.57:8000/product/1")
    .then((response) => response.json())
    .then((response) => this.setState({data: response.data}));
    
  }

  // componentDidUpdate(){
  //   fetch("/data/JHdata.json")
  //   .then((response) => response.json())
  //   .then((response) => this.setState({ata: response.products}));
  // }

  filterDropdownChange = (e) => {
    this.setState({ selectValue: e.target.value });
  }
  
  handleDropdown = () => {
    fetch("/data/JHdata.json")
    .then((response) => response.json())
    .then((response) => this.setState({
      ata: response.products,
      isToggleOn: !this.state.isToggleOn
    }));
      // this.setState(state => ({
      //   isToggleOn: !state.isToggleOn
      // }))
  }

  SortDropdown = () => {
      this.setState(state => ({
        isSortOn: !state.isSortOn
      }));
  }

  addHanlder = (zino) => {
    this.setState({
      hwan: zino
    }, () => {
      console.log(this.state.hwan);  
    })}

  // selectedHandler = (color) => {
 
    
  //   this.setState({
  //     fixColor: color
  //     //fixcolor는 자식 드롭다운 이미지를 눌렀을때 받아오는 colorName을 넣은 state이다.
  //     //누른 색상에 대한 이름
  //   })
  // }
  selectedHandler = (color) => {
    this.setState({
      fixColor: color
      //fixcolor는 자식 드롭다운 이미지를 눌렀을때 받아오는 colorName을 넣은 state이다.
      //누른 색상에 대한 이름
    })
  }

  fetchColor = () => {
    fetch("http://10.58.2.57:8000/product/1?color="+this.state.fixColor)
    .then((response) => response.json())
    .then((response) => this.setState({data: response.data}));
  }

  convertImg = (obj) => {
    // if(this.state.data.length > 0){
    //   for(let i=0; i < this.state.data.series_color.length; i++){
    //     if(this.state.data.series_color[i].name.includes(this.state.fixColor)){
          
    //       return i; 
    //     }
    //   }
    // }    
    for (let i = 0; i < obj.series_color.length; i++) {

      if (obj.series_color[i].name.includes(this.state.fixColor)) {
        return i
      }
    }
    return 0;
  }
    
  



  render() {
    console.log("datasss", this.state.data)
    return(
      <div className="List">
        <Header/>
        <Nav/>
        <main className="ListMain">
          <div className="ListTop">
            <div className="TopFilter">
              <div className="FilterToggle">
                  <button onClick={this.handleDropdown} className="ToggleButton">FILTER</button>
                  {this.state.isToggleOn ? (
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                            <div className="ColorFilter">
                                <span>Color</span>
                                {this.state.ata.map( luc =>{
                                return (<DropdownLugg lugColor={luc.lugColor} colorName={luc.colorName}
                                  selectedHandler={this.selectedHandler}
                                />);})} 
                            </div>
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
                                <button onClick={this.fetchColor} className="APPLYBtn">APPLY</button>
                                </div>    
                        </div>
                    </div>
                  ) : (null)
                  }
              </div>
              <div className="TopSeller">
                <div className="Seller">
                <p onClick={this.SortDropdown} className="SortBy">SORT BY</p>
                {this.state.isSortOn ? (
                    <div className="FilterDropdown">
                        <div className="DropdownBox">
                            <div className="CollectionFilter">
                                <span>PRODUCT COLLENTION</span>
                                <CheckCollect/>
                            </div>
                        </div>
                    </div>
                  ) : (null)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="ListContainer">
            <ul className="ListCabin">
                <CabinProduct/>
                {this.state.data.map(product => {
                  return (
                    <EditionProduct
                      collect={product.collection}
                      name={product.name}
                      fixName={product.series_color}
                      price={product.price}
                      img={product.series_color[this.convertImg(product)]}
                      youngColor={this.state.fixColor}
                      color={product.series_color.slice(0,4)}
                    />
                  )}
                )}
                
                
            </ul>
          </div>
        </main>
        <Footer/>
      </div>
    )
  };
};

export default withRouter(ProductList);
