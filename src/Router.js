import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AccList from './pages/Accessories/AccList';
import ProductList from './pages/Luggage/ProductList';


class Routes extends Component{
  render(){
      return(
          <Router>
              <Switch>
                  <Route exact path="/" component={ProductList}/>
                  <Route exact path="/accList" component={AccList}/>
              </Switch>
          </Router>
      )
  }
}

export default Routes;
