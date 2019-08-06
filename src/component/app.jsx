import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import ImgSrc from "../react.png";

import AppLink from "./app-link.jsx";
import AppTopics from "./app-topics.jsx";
import AppNavLink from "./app-navlink.jsx";
import NotFound from "./notfound.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="text-center mt-3 mb-3">
          <img src={ImgSrc} alt="react" />
        </div>
        <div className="list-group">
          <Link
            to="/"
            className="list-group-item list-group-item-action active"
          >
            Link-Basic
          </Link>
          <Link to="/topics" className="list-group-item list-group-item-action">
            URL Parameters
          </Link>
          <Link
            to="/nav-link"
            className="list-group-item list-group-item-action"
          >
            Nav Link
          </Link>
          <Link
            to="/nav"
            className="list-group-item list-group-item-action"
          >
            Not Found
          </Link>
        </div>
        <hr />
        <Switch>
          <Route exact path="/" component={AppLink} />
          <Route path="/topics" component={AppTopics} />
          <Route path="/nav-link" component={AppNavLink} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
