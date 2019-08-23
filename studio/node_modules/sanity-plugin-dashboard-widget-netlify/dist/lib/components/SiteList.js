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
var spinner_1 = __importDefault(require("part:@sanity/components/loading/spinner"));
var react_1 = __importDefault(require("react"));
var NetlifyWidget_css_1 = __importDefault(require("./NetlifyWidget.css"));
var SiteItem_1 = __importDefault(require("./SiteItem"));
var SiteList = /** @class */ (function (_super) {
    __extends(SiteList, _super);
    function SiteList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiteList.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, onDeploy = _a.onDeploy, sites = _a.sites;
        if (isLoading) {
            return react_1.default.createElement(spinner_1.default, { center: true, message: "Loading sites\u2026" });
        }
        if (!sites || (sites && sites.length === 0)) {
            return (react_1.default.createElement("div", { className: NetlifyWidget_css_1.default.error }, "No sites are defined in the widget options. Please check your config."));
        }
        return (react_1.default.createElement("ul", { className: NetlifyWidget_css_1.default.sites }, sites.map(function (site, index) {
            return (react_1.default.createElement(SiteItem_1.default, { onDeploy: onDeploy, site: site, key: "site-" + index }));
        })));
    };
    return SiteList;
}(react_1.default.Component));
exports.default = SiteList;
//# sourceMappingURL=SiteList.js.map