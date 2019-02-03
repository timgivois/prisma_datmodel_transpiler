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
exports.__esModule = true;
var ParseError = /** @class */ (function (_super) {
    __extends(ParseError, _super);
    function ParseError(message) {
        if (message === void 0) { message = ''; }
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = 'ParseError';
        _this.message = message;
        return _this;
    }
    return ParseError;
}(Error));
exports.ParseError = ParseError;
var SyntaxError = /** @class */ (function (_super) {
    __extends(SyntaxError, _super);
    function SyntaxError(message) {
        if (message === void 0) { message = ''; }
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.name = 'SyntaxError';
        _this.message = message;
        return _this;
    }
    return SyntaxError;
}(Error));
exports.SyntaxError = SyntaxError;
//# sourceMappingURL=errors.js.map