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
var operators_1 = require("rxjs/operators");
exports.stateReducer$ = operators_1.scan(function (state, action) {
    switch (action.type) {
        case 'setSites':
            return __assign({}, state, { sites: action.sites || [] });
        case 'deploy/started':
            return __assign({}, state, { sites: state.sites.map(function (site) {
                    if (action.site && site.id === action.site.id) {
                        return __assign({}, site);
                    }
                    return site;
                }) });
        case 'deploy/failed':
            return __assign({}, state, { error: action.error });
        case 'deploy/completed':
            return __assign({}, state, { sites: state.sites.map(function (site) {
                    if (action.site && site.id === action.site.id) {
                        return __assign({}, site, { error: action.error });
                    }
                    return site;
                }) });
        default:
            return state;
    }
});
//# sourceMappingURL=reducers.js.map