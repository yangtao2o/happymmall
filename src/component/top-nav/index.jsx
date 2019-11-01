import React from "react";
import { Link } from "react-router-dom";
import MUtil from "util/mm.jsx";
import User from "service/user-service.jsx";

const _mm = new MUtil();
const _user = new User();

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

function LoginContent() {
  return (
    <li className="dropdown">
      <Link to="/login" aria-expanded="false">
        <i className="fa fa-user fa-fw" />
        <span>登录</span>
      </Link>
    </li>
  );
}

function LogoutContent(props) {
  return (
    <li className="dropdown">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        href="javascript:;"
        aria-expanded="false"
      >
        <i className="fa fa-user fa-fw" />
        <span>欢迎，{props.username}</span>
        <i className="fa fa-caret-down" />
      </a>
      <ul className="dropdown-menu dropdown-user">
        <li>
          <a href="#" onClick={props.onClick}>
            <i className="fa fa-sign-out fa-fw" /> 退出登录
          </a>
        </li>
      </ul>
    </li>
  );
}

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
            {this.state.username ? (
              <LogoutContent
                username={this.state.username}
                onClick={this.onLogout}
              />
            ) : (
              <LoginContent />
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopNav;
