"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
var tokens = {
    'type': {
        token: constants_1.TYPE_DEFINITION
    },
    '{': {
        token: constants_1.OPEN_BRACES
    },
    '}': {
        token: constants_1.CLOSE_BRACES
    },
    ':': {
        token: constants_1.EQUAL
    },
    'ID': {
        token: constants_1.TYPE,
        value: constants_1.ID
    },
    'DateTime': {
        token: constants_1.TYPE,
        value: constants_1.DATETIME
    },
    'String': {
        token: constants_1.TYPE,
        value: constants_1.STRING
    },
    'Boolean': {
        token: constants_1.TYPE,
        value: constants_1.BOOLEAN
    },
    'Float': {
        token: constants_1.TYPE,
        value: constants_1.FLOAT
    },
    'Int': {
        token: constants_1.TYPE,
        value: constants_1.INT
    },
    'enum': {
        token: constants_1.ENUM_DEFINITION
    },
    '!': {
        token: constants_1.IS_REQUIRED
    },
    '[': {
        token: constants_1.OPEN_BRACKETS
    },
    ']': {
        token: constants_1.CLOSE_BRACKETS
    },
    '@unique': {
        token: constants_1.IS_UNIQUE
    },
    'scalar': {
        token: constants_1.SCALAR_DEFINITION
    }
};
exports.variableRegex = /^\w+$/;
exports.variableToken = function (value) {
    return {
        token: constants_1.VARIABLE,
        value: value
    };
};
exports["default"] = tokens;
//# sourceMappingURL=tokens.js.map