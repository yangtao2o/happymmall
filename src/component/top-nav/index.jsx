import React from "react";
import { Link } from "react-router-dom";
import MUtil from "util/mm.jsx";
import User from "service/user-service.jsx";

const _mm = new MUtil();
const _user = new User();

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);

    this.state = {
      username: _mm.getLocalStorage("login-info").username || ""
    };
  }

  onLogout() {
    _mm.doLogout("login-info");
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
              <Link to="/login" aria-expanded="false">
                <i className="fa fa-user fa-fw" />
                <span>登录</span>
              </Link>
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle={this.state.username ? 'dropdown' : ''}
                href="javascript:;"
                aria-expanded="false"
              >
                <i className="fa fa-user fa-fw" />
                {this.state.username ? (
                  <span>欢迎，{this.state.username}</span>
                ) : (
                  <span>欢迎您</span>
                )}
                <i className={this.state.username ? 'fa fa-caret-down' : ''} />
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="#" onClick={this.onLogout}>
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
