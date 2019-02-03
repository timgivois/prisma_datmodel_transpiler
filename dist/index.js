"use strict";
exports.__esModule = true;
var scanner_1 = require("./scanner");
var parser_1 = require("./parser");
var generator_1 = require("./generator");
var errors_1 = require("./errors");
exports.transpile = function (dataModel) {
    var tokens = scanner_1.scan(scanner_1.preprocess(dataModel));
    if (!parser_1.hasValidGrammar(tokens)) {
        throw new errors_1.SyntaxError('Invalid Syntax');
    }
    var AST = parser_1.parse(tokens);
    return generator_1.generateCode(AST);
};
//# sourceMappingURL=index.js.map