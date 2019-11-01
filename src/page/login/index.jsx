import React from "react";
import MUtil from "util/mm.jsx";
import User from "service/user-service.jsx";
import "./index.scss";

const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: _mm.getUrlParam("redirect") || "/"
    };
  }

  componentWillMount() {
    document.title = "登录 - MMALL ADMIN";
  }

  onInputChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  onKeyUpHandle(e) {
    if(e.keyCode === 13) {
      this.onSubmitBtn(e);
    }
  }

  onSubmitBtn(e) {
    const loginInfo = {
      username: this.state.username,
      password: this.state.password
    };
    const checkLogin = _user.checkLoginInfo(loginInfo);
    if (checkLogin.status) {
      _user.login(loginInfo).then(
        res => {
          _mm.setLocalStorage('login-info', res);
          this.props.history.push(this.state.redirect);
        },
        err => {
          _mm.errorTips(err);
        }
      );
    } else {
      _mm.errorTips(checkLogin.msg);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <div className="jumbotron">
            <div className="page-header">
              <h2 className="text-center">欢迎登录</h2>
            </div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control input-lg"
                  placeholder="请输入用户名"
                  onChange={e => this.onInputChange(e)}
                  onKeyUp={e => this.onKeyUpHandle(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control input-lg"
                  placeholder="请输入用户名密码"
                  onChange={e => this.onInputChange(e)}
                  onKeyUp={e => this.onKeyUpHandle(e)}
                />
              </div>
              <button
                type="button"
                className="btn btn-info btn-lg btn-block"
                onClick={e => this.onSubmitBtn(e)}
              >
                登录
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
