class MUtil {
  request(param) {
    $.ajax({
      url: "script.php",
      method: "POST",
      data: { id : menuId },
      dataType: "html"
    })
  }
}

export default MUtil;