import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import "./app.scss";

import Layout from "component/layout/index.jsx";
import Home from "page/home/index.jsx";
import About from "page/about/index.jsx";
import User from "page/user/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout></Layout>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={User} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
