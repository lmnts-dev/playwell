"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ramda = require("ramda");

var _isObj = _interopRequireDefault(require("./isObj"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns whether or not an object has an own property with the specified name at a given path.
 *
 * @func hasPath
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.14.0|v1.14.0}
 * @deprecated since v2.12.0; ramda@0.26.0 contains hasPath
 * @category Object
 * @typedef Idx = String | Int
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array.<string|number>} path The path of the nested property
 * @param {Object} obj The object to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#has|R.has}
 * @example
 *
 * RA.hasPath(['a', 'b'], { a: { b: 1 } }); //=> true
 * RA.hasPath(['a', 'b', 'c'], { a: { b: 1 } }); //=> false
 * RA.hasPath(['a', 'b'], { a: { } }); //=> false
 * RA.hasPath([0], [1, 2]); //=> true
 */
var hasPath = (0, _ramda.curryN)(2, function (objPath, obj) {
  var prop = (0, _ramda.head)(objPath); // termination conditions

  if ((0, _ramda.length)(objPath) === 0 || !(0, _isObj["default"])(obj)) {
    return false;
  }

  if ((0, _ramda.length)(objPath) === 1) {
    return (0, _ramda.has)(prop, obj);
  }

  return hasPath((0, _ramda.tail)(objPath), (0, _ramda.path)([prop], obj)); // base case
});
var _default = hasPath;
exports["default"] = _default;