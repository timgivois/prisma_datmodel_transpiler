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
exports.__esModule = true;
var constants_1 = require("../constants");
var assignmentGrammar = {
    VARIABLE: {
        EQUAL: {
            TYPE: constants_1.DONE // TODO: add required fields, arrays and relations
        }
    }
};
var grammar = {
    TYPE_DEFINITION: {
        VARIABLE: {
            OPEN_BRACES: {
                IN_LOOP: __assign({}, assignmentGrammar),
                CLOSE_BRACES: constants_1.DONE
            }
        }
    },
    SCALAR_DEFINITION: {
        VARIABLE: constants_1.DONE
    },
    ENUM_DEFINITION: {
        OPEN_BRACES: {
            CLOSE_BRACES: constants_1.DONE,
            IN_LOOP: {
                VARIABLE: constants_1.DONE
            }
        }
    }
};
exports["default"] = grammar;
//# sourceMappingURL=grammar.js.map