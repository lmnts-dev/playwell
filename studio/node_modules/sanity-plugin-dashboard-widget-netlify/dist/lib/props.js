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
var react_props_stream_1 = require("react-props-stream");
var operators_1 = require("rxjs/operators");
var deploy_1 = require("./datastores/deploy");
var reducers_1 = require("./reducers");
var noop = function () { return void 0; };
var INITIAL_PROPS = {
    title: 'Netlify sites',
    sites: [],
    isLoading: true,
    onDeploy: noop
};
exports.props$ = function (options) {
    var sites = (options.sites || []).map(function (site) { return ({
        id: site.apiId,
        name: site.name,
        title: site.title,
        buildHookId: site.buildHookId,
        url: site.name && "https://" + site.name + ".netlify.com/",
        adminUrl: site.name && "https://app.netlify.com/sites/" + site.name
    }); });
    var _a = react_props_stream_1.createEventHandler(), onDeploy$ = _a[0], onDeploy = _a[1];
    var setSitesAction$ = rxjs_1.of(sites).pipe(operators_1.map(function (sites) { return ({ type: 'setSites', sites: sites }); }));
    var deployAction$ = onDeploy$.pipe(operators_1.map(function (site) { return ({ type: 'deploy/started', site: site }); }));
    var deployResult$ = onDeploy$.pipe(operators_1.switchMap(function (site) { return deploy_1.deploy(site); }));
    var deployCompletedAction$ = deployResult$.pipe(operators_1.map(function (result) { return (__assign({ type: 'deploy/completed' }, result)); }, operators_1.catchError(function (error) { return rxjs_1.of({ type: 'deploy/failed', error: error }); })));
    rxjs_1.merge(setSitesAction$, deployAction$, deployCompletedAction$)
        .pipe(reducers_1.stateReducer$)
        .subscribe();
    return rxjs_1.of(sites).pipe(operators_1.map(function (sites) {
        return {
            sites: sites,
            title: options.title || INITIAL_PROPS.title,
            description: options.description,
            isLoading: false,
            onDeploy: onDeploy
        };
    }), operators_1.startWith(INITIAL_PROPS));
};
//# sourceMappingURL=props.js.map