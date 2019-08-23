"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_props_stream_1 = require("react-props-stream");
var operators_1 = require("rxjs/operators");
var props_1 = require("./props");
var NetlifyWidget_1 = __importDefault(require("./components/NetlifyWidget"));
exports.default = react_props_stream_1.streamingComponent(function (options$) {
    return options$.pipe(operators_1.switchMap(function (options) {
        return props_1.props$(options).pipe(operators_1.map(function (props) {
            return react_1.default.createElement(NetlifyWidget_1.default, __assign({}, props));
        }));
    }));
});
//# sourceMappingURL=Widget.js.map