import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./app.scss";

import Layout from "component/layout/index.jsx";
import Home from "page/home/index.jsx";
import Product from "page/product/router.jsx";
import OrderList from "page/order/index.jsx";
import OrderDetail from "page/order/detail.jsx";
import UserList from "page/user/index.jsx";
import Login from "page/login/index.jsx";
import Error from "page/error/index.jsx";

class App extends React.Component {
  render() {
    const LayoutRouter = (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/product-category" component={Product} />
          <Route path="/order/index" component={OrderList} />
          <Route path="/order/detail/:orderNumber" component={OrderDetail} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact from="/user" to="/user/index" />
          <Redirect exact from="/order" to="/order/index" />
          <Route component={Error} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
