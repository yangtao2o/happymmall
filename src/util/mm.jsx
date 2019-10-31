
class MUtil {
  request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: param.url || '',
        type: param.type || 'get',
        dataType: param.type || "json",
        data: param.data || null,
        success: function(res) {
          if(res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg);
          } else if(res.status === 10) {
            this.doLogin();
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
}

export default MUtil;