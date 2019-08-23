"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var statusCodeRequest_1 = require("../http/statusCodeRequest");
function deploy(site) {
    if (!site.buildHookId) {
        return rxjs_1.of(new Error('Site missing buildHookId'));
    }
    return statusCodeRequest_1.statusCodeRequest("https://api.netlify.com/build_hooks/" + site.buildHookId, {
        method: 'POST'
    }).pipe(operators_1.map(function (result) { return ({ result: result, site: site }); }));
}
exports.deploy = deploy;
//# sourceMappingURL=deploy.js.map