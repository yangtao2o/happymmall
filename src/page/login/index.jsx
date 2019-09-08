import React from "react";
import MUtil from "util/mm.jsx";
import "./index.scss";

const _mm = new MUtil();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      username: '',
      password: '',
    }

  }

  onInputChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  onSubmit(e) {
    _mm.request({
      
    })
  }
  render() {
    console.log(this.data)

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
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control input-lg"
                  placeholder="请输入用户名密码"
                  onChange={(e) => this.onInputChange(e)}
                />
              </div>
              <button type="button" className="btn btn-info btn-lg btn-block" onSubmit={(e) => this.onSubmit(e)}>
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
