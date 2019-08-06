import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./home.jsx";
import About from "./about.jsx";
import Inbox from "./inbox.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link className="btn btn-secondary btn-lg" to="/">
              Home
            </Link>
            <Link className="btn btn-secondary btn-lg" to="/about">
              About
            </Link>
            <Link className="btn btn-secondary btn-lg" to="/inbox">
              Inbox
            </Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} />
        </div>
      </Router>
    );
  }
}

export default App;
