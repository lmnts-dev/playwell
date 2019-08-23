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
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var createAbortController_1 = require("./utils/createAbortController");
exports.jsonRequest = function (input, init) {
    return new rxjs_1.Observable(function (subscriber) {
        var controller = createAbortController_1.createAbortController();
        var onResponse = function (res) {
            subscriber.next(res);
            subscriber.complete();
        };
        var onError = function (err) {
            if (err.name === 'AbortError') {
                subscriber.complete();
            }
            else {
                subscriber.error(err);
            }
        };
        fetch(input, __assign({}, init, { signal: controller.signal }))
            .then(function (res) {
            if (res.status < 200 || res.status > 299) {
                throw new Error("HTTP Error " + res.status + ": " + res.statusText);
            }
            return res.json();
        })
            .then(onResponse, onError);
        return function () {
            controller.abort();
        };
    });
};
//# sourceMappingURL=jsonRequest.js.map