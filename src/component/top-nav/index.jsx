import React from "react";
import { Link } from "react-router-dom";
class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }
  onLogout() {
    console.log("logout");
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default top-navbar" role="navigation">
          <div className="navbar-header">
            <MobileMenu />
            <Link className="navbar-brand" to="/">
              <b>HAPPY</b> MMALL
            </Link>
          </div>

          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <i className="fa fa-user fa-fw" />
                <span>欢迎，admin</span>
                <i className="fa fa-caret-down" />
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="#" onClick={() => this.onLogout()}>
                    <i className="fa fa-sign-out fa-fw" /> 退出登录
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
function MobileMenu() {
  return (
    <button
      type="button"
      className="navbar-toggle"
      data-toggle="collapse"
      data-target=".sidebar-collapse"
    >
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
  );
}

export default TopNav;
