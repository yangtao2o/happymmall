import MUtil from "util/mm.jsx";

const _mm = new MUtil();

class User {
  login(data) {
    return _mm.request({
      url: '/manage/user/login.do',
      type: 'post',
      data: data
    })
  }

  checkLoginInfo(loginInfo) {
    const username = $.trim(loginInfo.username);
    const password = $.trim(loginInfo.password);
    if(typeof username !== 'string' || username.length === 0) {
      return {
        status: false,
        msg: '用户名不能为空！'
      }
    }
    if(typeof password !== 'string' || password.length === 0) {
      return {
        status: false,
        msg: '密码不能为空！'
      }
    }
    return {
      status: true,
      msg: '验证通过'
    }
  }
}

export default User;