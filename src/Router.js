import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./user/Login/Login";
//import Signup from "./user/SignUp/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          {/* <Route exact path="/signup" component={Signup}></Route> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
