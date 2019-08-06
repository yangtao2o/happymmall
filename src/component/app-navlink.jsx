import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

function AppNavLink() {
  return (
    <Router>
      <div className="mt-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink exact activeClassName="active" to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/users" className="nav-link">User</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={User} />
          <Route render={() => <h3>Not Found.</h3>} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function User() {
  return <h2>Users</h2>;
}

export default AppNavLink;