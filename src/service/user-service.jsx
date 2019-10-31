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
}

export default User;