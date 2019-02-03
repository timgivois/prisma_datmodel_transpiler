"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
var grammar_1 = require("./grammar");
var nodes_1 = require("./nodes");
var constants_2 = require("../constants");
exports.hasValidGrammar = function (tokens) {
    var context = grammar_1["default"];
    var valid = false;
    var loops = 0;
    var outsideLoop = {};
    tokens.forEach(function (each) {
        if (context[each.token] === constants_1.DONE) {
            if (loops === 0) {
                valid = true;
                context = grammar_1["default"];
            }
            else {
                loops = loops - 1;
                context = outsideLoop;
            }
        }
        else if (context[constants_1.IN_LOOP] && context[constants_1.IN_LOOP][each.token]) {
            outsideLoop = context;
            loops = loops + 1;
            context = context[constants_1.IN_LOOP][each.token];
            valid = false;
        }
        else if (context[each.token]) {
            context = context[each.token];
            valid = false;
        }
        else {
            throw new Error("Syntax error: " + each.token);
        }
    });
    return valid;
};
exports.parse = function (tokens) {
    var AST = new nodes_1.SDL();
    var actualDefinition = null;
    var actualAssignment = null;
    var insideDefinition = false;
    var isAssignment = false;
    tokens.forEach(function (each) {
        if (each.token === constants_2.TYPE_DEFINITION || each.token === constants_2.ENUM_DEFINITION || each.token === constants_2.SCALAR_DEFINITION) {
            actualDefinition = new nodes_1.Defintion(each);
        }
        else if (each.token === constants_2.CLOSE_BRACES && actualDefinition) {
            if (actualAssignment) {
                actualDefinition.addAssignment(actualAssignment);
            }
            AST.addDefinition(actualDefinition);
            insideDefinition = false;
        }
        else if (each.token === constants_2.OPEN_BRACES) {
            insideDefinition = true;
        }
        else if (each.token === constants_2.VARIABLE && actualDefinition) {
            if (insideDefinition) {
                if (actualAssignment) {
                    actualDefinition.addAssignment(actualAssignment);
                }
                actualAssignment = new nodes_1.Assignment(each);
            }
            else {
                actualDefinition.setName(each);
            }
        }
        else if (each.token === constants_2.EQUAL) {
            isAssignment = true;
        }
        else if (isAssignment && actualAssignment) {
            isAssignment = false;
            actualAssignment.setType(each);
        }
    });
    return AST;
};
//# sourceMappingURL=index.js.map