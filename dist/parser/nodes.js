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
var constants_1 = require("../constants");
var Node = /** @class */ (function () {
    function Node(token) {
        this.token = token.token;
    }
    return Node;
}());
exports.Node = Node;
var SDL = /** @class */ (function () {
    function SDL() {
        var _this = this;
        this.typeDefinitions = [];
        this.enumDefinitions = [];
        this.scalarDefinitions = [];
        this.addDefinition = function (definition) {
            switch (definition.getScope()) {
                case constants_1.TYPE_DEFINITION:
                    _this.typeDefinitions.push(definition);
                    break;
                case constants_1.ENUM_DEFINITION:
                    _this.enumDefinitions.push(definition);
                case constants_1.SCALAR_DEFINITION:
                    _this.scalarDefinitions.push(definition);
                default:
                    throw new Error('Unknown definition'); // change this error
            }
        };
    }
    return SDL;
}());
exports.SDL = SDL;
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment(token) {
        var _this = _super.call(this, token) || this;
        _this.unique = false;
        _this.setType = function (token) {
            _this.value = token.value;
        };
        _this.key = token.value;
        return _this;
    }
    return Assignment;
}(Node));
exports.Assignment = Assignment;
var Defintion = /** @class */ (function (_super) {
    __extends(Defintion, _super);
    function Defintion(token) {
        var _this = _super.call(this, token) || this;
        _this.scope = '';
        _this.assignments = [];
        _this.getScope = function () {
            return _this.scope;
        };
        _this.setName = function (token) {
            _this.name = token.value;
        };
        _this.addAssignment = function (newAssignment) {
            _this.assignments.push(newAssignment);
        };
        _this.scope = token.token;
        return _this;
    }
    return Defintion;
}(Node));
exports.Defintion = Defintion;
//# sourceMappingURL=nodes.js.map