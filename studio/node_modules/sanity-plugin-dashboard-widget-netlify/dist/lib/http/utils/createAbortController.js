"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var abort_controller_1 = __importDefault(require("abort-controller"));
exports.createAbortController = function () {
    if (!('AbortController' in window)) {
        return new abort_controller_1.default();
    }
    return new AbortController();
};
//# sourceMappingURL=createAbortController.js.map