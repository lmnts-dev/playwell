"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var anchor_1 = __importDefault(require("part:@sanity/components/buttons/anchor"));
var NetlifyWidget_css_1 = __importDefault(require("./NetlifyWidget.css"));
var SiteList_1 = __importDefault(require("./SiteList"));
var NetlifyWidget = /** @class */ (function (_super) {
    __extends(NetlifyWidget, _super);
    function NetlifyWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetlifyWidget.prototype.render = function () {
        var netlifySitesUrl = 'https://app.netlify.com/account/sites';
        var _a = this.props, title = _a.title, description = _a.description, isLoading = _a.isLoading, sites = _a.sites, onDeploy = _a.onDeploy;
        return (react_1.default.createElement("div", { className: NetlifyWidget_css_1.default.container },
            react_1.default.createElement("header", { className: NetlifyWidget_css_1.default.header },
                react_1.default.createElement("h2", { className: NetlifyWidget_css_1.default.title }, title)),
            react_1.default.createElement("div", { className: NetlifyWidget_css_1.default.content },
                description && (react_1.default.createElement("p", { className: NetlifyWidget_css_1.default.description, dangerouslySetInnerHTML: { __html: description } })),
                react_1.default.createElement(SiteList_1.default, { isLoading: isLoading, onDeploy: onDeploy, sites: sites })),
            react_1.default.createElement("div", { className: NetlifyWidget_css_1.default.footer },
                react_1.default.createElement(anchor_1.default, { disabled: isLoading, href: isLoading ? undefined : netlifySitesUrl, bleed: true, color: "primary", kind: "simple" }, "Manage sites at Netlify"))));
    };
    return NetlifyWidget;
}(react_1.default.Component));
exports.default = NetlifyWidget;
//# sourceMappingURL=NetlifyWidget.js.map