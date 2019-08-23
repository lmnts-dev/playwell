"use strict";

exports.__esModule = true;
exports.ordTrait = exports.chainTrait = exports.semigroupTrait = exports.setoidTrait = exports.applyTrait = exports.functorTrait = void 0;

var _ramda = require("ramda");

var _isString = _interopRequireDefault(require("../isString"));

var _isNumber = _interopRequireDefault(require("../isNumber"));

var _isFunction = _interopRequireDefault(require("../isFunction"));

var _util = require("./util");

var _mapping = _interopRequireDefault(require("./mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var functorTrait = _defineProperty({}, _mapping["default"].map, function (fn) {
  return this.constructor[_mapping["default"].of](fn(this.value));
});

exports.functorTrait = functorTrait;

var applyTrait = _defineProperty({}, _mapping["default"].ap, function (applyWithFn) {
  var _this = this;

  return applyWithFn.map(function (fn) {
    return fn(_this.value);
  });
});

exports.applyTrait = applyTrait;

var setoidTrait = _defineProperty({}, _mapping["default"].equals, function (setoid) {
  return (0, _util.isSameType)(this, setoid) && (0, _ramda.equals)(this.value, setoid.value);
});

exports.setoidTrait = setoidTrait;

var semigroupTrait = _defineProperty({}, _mapping["default"].concat, function (semigroup) {
  var concatenatedValue = this.value;

  if ((0, _isString["default"])(this.value) || (0, _isNumber["default"])(this.value)) {
    concatenatedValue = this.value + semigroup.value;
  } else if ((0, _ramda.pathSatisfies)(_isFunction["default"], ['value', _mapping["default"].concat], this)) {
    concatenatedValue = this.value[_mapping["default"].concat](semigroup.value);
  } else if ((0, _ramda.pathSatisfies)(_isFunction["default"], ['value', 'concat'], this)) {
    concatenatedValue = this.value.concat(semigroup.value);
  }

  return this.constructor[_mapping["default"].of](concatenatedValue);
});

exports.semigroupTrait = semigroupTrait;

var chainTrait = _defineProperty({}, _mapping["default"].chain, function (fn) {
  var newChain = fn(this.value);
  return (0, _util.isSameType)(this, newChain) ? newChain : this;
});

exports.chainTrait = chainTrait;

var ordTrait = _defineProperty({}, _mapping["default"].lte, function (ord) {
  return (0, _util.isSameType)(this, ord) && (this.value < ord.value || this[_mapping["default"].equals](ord));
});

exports.ordTrait = ordTrait;