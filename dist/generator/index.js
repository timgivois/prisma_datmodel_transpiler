"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var defaultCode = "\nscalar DateTime\n\nscalar Long\n\n\"\"\"An object with an ID\"\"\"\ninterface Node {\n  \"\"\"The id of the object.\"\"\"\n  id: ID!\n}\n\n";
exports.generateCode = function (AST) {
    var code = "" + defaultCode;
    AST.typeDefinitions.forEach(function (definition) {
        code = code.concat(generateCodeForType(definition));
    });
    return code;
};
var generateCodeForType = function (typeDefinition) {
    var assignmentsCode = typeDefinition.assignments.reduce(function (lastString, assignment) {
        return lastString.concat("\n\t" + assignment.key + ": " + assignment.value);
    }, '');
    var code = "\ntype " + utils_1.capitalizeFirstLetter(typeDefinition.name) + " implements Node {" + assignmentsCode + "\n}\n  ";
    return code;
};
//# sourceMappingURL=index.js.map