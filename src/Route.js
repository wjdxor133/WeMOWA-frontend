import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-route-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={}></Route>
        </Switch>
      </Router>
    );
  }
}
export default Routes;
