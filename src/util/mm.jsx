class MUtil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: param.url || '',
        type: param.type || 'get',
        dataType: param.dataType || "json",
        data: param.data || null,
        success: function(res) {
          // success
          if(res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg);
          // login
          } else if(res.status === 10) {
            this.doLogin();
          // other error
          } else {
            typeof reject === 'function' && reject(res.msg || res.data);
          }
        },
        error: function(err) {
          typeof reject === 'function' && reject(err.responseText);
        }
      })

    })
  }

  doLogin() {
    window.location.href = `/login?redirect=${encodeURIComponent(window.location.name)}`;
  }

  getUrlParam(name) {
    // param=123&param1=456
    let queryString = window.location.search.split('?')[1] || '';
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let result = queryString.match(reg);
    // ["redirect=/post/user", "", "/post/user", "", index: 0, input: "redirect=/post/user", groups: undefined] 
    return result ? decodeURIComponent(result[2]) : null;
  
  }

  errorTips(err) {
    alert(err || 'It\'s error');
  }
}

export default MUtil;