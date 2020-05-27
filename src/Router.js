import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/reset.scss";
import Main from "./pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
