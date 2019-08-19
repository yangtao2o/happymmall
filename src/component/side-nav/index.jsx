import React from "react";
import { Link, NavLink } from "react-router-dom";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="navbar-default navbar-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav">
              <li>
                <NavLink exact to="/" activeClassName="active-menu">
                  <i className="fa fa-dashboard" />
                  <span>首页</span>
                </NavLink>
              </li>
              <li className="active">
                <Link to="/product">
                  <i className="fa fa-sitemap" /> 
                  <span>商品</span>
                  <span className="fa arrow" />
                </Link>
                <ul
                  className="nav nav-second-level collapse in"
                  aria-expanded="true"
                >
                  <li>
                    <NavLink activeClassName="active-menu" to="/product">商品管理</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active-menu" to="/category">品类管理</NavLink>
                  </li>
                </ul>
              </li>
              <li className="active">
                <Link to="/order">
                  <i className="fa fa-sitemap" /> 
                  <span>订单</span>
                  <span className="fa arrow" />
                </Link>
                <ul
                  className="nav nav-second-level collapse in"
                  aria-expanded="true"
                >
                  <li>
                    <NavLink activeClassName="active-menu" to="/order">订单管理</NavLink>
                  </li>
                </ul>
              </li>
              <li className="active">
                <Link to="/users">
                  <i className="fa fa-sitemap" /> 
                  <span>用户</span>
                  <span className="fa arrow" />
                </Link>
                <ul
                  className="nav nav-second-level collapse in"
                  aria-expanded="true"
                >
                  <li>
                    <NavLink activeClassName="active-menu" to="/users">用户管理</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default SideNav;
