exports.isString = function (obj) {
  return typeof obj === "string";
};

exports.isBoolean = function (obj) {
  return typeof obj === "boolean";
};

exports.isNumber = function (obj) {
  return "[object Number]" == {}.toString.call(obj) && isFinite(obj); //摘自百度tangram 非常严谨
};

exports.isArray = function (obj) {
  return typeof obj.sort === "function";
};

exports.isObject = function (obj) {
  return (
    Object.prototype.toString(obj) === "[object Object]" && !type.isNull(obj)
  );
};

exports.isUndefined = function (obj) {
  return obj === void 0;
};

exports.isNull = function (obj) {
  return obj === null;
};

exports.isNaN = function (obj) {
  return obj !== obj;
};

exports.isFunction = function (obj) {
  return typeof obj === "function";
};

exports.isArrayLike = function (obj) {
  var length = !!obj && "length" in obj && obj.length;

  if (type.isFunction(obj) || type.isWindow(obj)) return false;

  return (
    type.isArray(obj) ||
    length === 0 ||
    (type.isNumber(obj) && length > 0 && length - 1 in obj)
  );
};

exports.isPlainObject = function (obj) {
  return (
    typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype
  );
};

exports.isWindow = function (obj, isIE) {
  if (isIE) {
    if (!obj) return false;
    // 利用IE6-8 window == document 为true document == window 为false  判断
    return obj == obj.document && obj.document != obj;
  } else {
    var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/;
    return rwindow.test(toString.call(obj));
  }
};

exports.isDate = function (obj) {
  return (
    {}.toString.call(obj) === "[object Date]" &&
    obj.toString() !== "Invalid Date" &&
    !isNaN(obj)
  );
};

module.exports = exports;
