function getQueryParameters() {
  let params = {};
  let queryString = window.location.search.substring(1);
  let queries = queryString.split("&");
  queries.map((item, index) => {
    let data = item.split("=");
    params[decodeURIComponent(data[0])] = decodeURIComponent(data[1]);
  });
  return params;
}

window.onload = function () {
  var params = getQueryParameters();
  var dadosDiv = document.getElementById("dados");
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var para = document.createElement("p");
      para.textContent = key + ": " + params[key];
      dadosDiv.appendChild(para);
    }
  }
};
