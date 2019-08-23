"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ramda = require("ramda");

var _isFunction = _interopRequireDefault(require("../isFunction"));

var _mapping = _interopRequireDefault(require("../fantasy-land/mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isFunctor = (0, _ramda.either)((0, _ramda.pathSatisfies)(_isFunction["default"], ['map']), (0, _ramda.pathSatisfies)(_isFunction["default"], [_mapping["default"].map]));
var isApply = (0, _ramda.both)(isFunctor, (0, _ramda.either)((0, _ramda.pathSatisfies)(_isFunction["default"], ['ap']), (0, _ramda.pathSatisfies)(_isFunction["default"], [_mapping["default"].ap])));
var ap = (0, _ramda.curryN)(2, function (applyF, applyX) {
  // return original ramda `ap` if not Apply spec
  if (!isApply(applyF) || !isApply(applyX)) {
    return (0, _ramda.ap)(applyF, applyX);
  }

  try {
    // new version of `ap` starting from ramda version > 0.23.0
    return applyF.ap(applyX);
  } catch (e) {
    // old version of `ap` till ramda version <= 0.23.0
    return applyX.ap(applyF);
  }
});
var _default = ap;
exports["default"] = _default;