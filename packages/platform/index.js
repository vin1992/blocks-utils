exports.isApp = function () {
  return navigator.userAgent.indexOf("HybridAPP") > -1;
};

exports.isWx = function () {
  return navigator.userAgent.indexOf("MicroMessenger") > -1;
};

exports.isAndriod = function () {
  return (
    navigator.userAgent.indexOf("Android") > -1 ||
    navigator.userAgent.indexOf("Adr") > -1
  );
};

exports.isIOS = function () {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
};

exports.getAppInfo = function () {
  let ua = navigator.userAgent;
  if (!Util.isApp) return {};
  let index = ua.indexOf("HybridAPP");
  let appInfo = ua.substr(index);
  return {
    os: appInfo.split("/")[2],
    app_verison: appInfo.split("/")[1],
  };
};

module.exports = exports;
