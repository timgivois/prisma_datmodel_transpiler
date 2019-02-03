"use strict";
exports.__esModule = true;
var tokens_1 = require("./tokens");
var errors_1 = require("../errors");
var preprocess = function (dataModel) {
    // TODO: Refactor this shit haha
    var extraEnters = new RegExp(/\n\n+/, 'g');
    var extraSpaces = new RegExp(/  +/, 'gm');
    var trimSpaces = new RegExp(/^ +| +$/, 'gm');
    var equality = new RegExp(/:/, 'g');
    var openBraces = new RegExp(/\[/, 'g');
    var closeBraces = new RegExp(/\]/, 'g');
    var exclamation = new RegExp(/!/, 'g');
    var withoutExtraEnters = dataModel.replace(extraEnters, '\n');
    var withEqualitySpaces = withoutExtraEnters.replace(equality, ' : ');
    var withBracesSpaces = withEqualitySpaces.replace(openBraces, ' [ ').replace(closeBraces, ' ] ');
    var withExclammationSpaces = withBracesSpaces.replace(exclamation, ' ! ');
    var withoutExtraSpaces = withExclammationSpaces.replace(extraSpaces, ' ');
    var withTrimedSpaces = withoutExtraSpaces.replace(trimSpaces, '');
    return withTrimedSpaces;
};
exports.preprocess = preprocess;
var scan = function (dataModel) {
    var delimiter = new RegExp(/\s+/, 'g');
    var splittedDM = dataModel.split(delimiter);
    var parsedDM = [];
    splittedDM.forEach(function (word) {
        if (tokens_1["default"][word]) {
            parsedDM.push(tokens_1["default"][word]);
        }
        else if (word.match(tokens_1.variableRegex)) {
            parsedDM.push(tokens_1.variableToken(word));
        }
        else {
            throw new errors_1.ParseError("Unrecognized character: " + word);
        }
    });
    return parsedDM;
};
exports.scan = scan;
//# sourceMappingURL=index.js.map