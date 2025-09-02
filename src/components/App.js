import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './../styles/App.css';

import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
