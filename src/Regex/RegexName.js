"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberRegex = exports.NameOrNnationalityRegex = void 0;
var NameOrNnationalityRegex = /** @class */ (function () {
    function NameOrNnationalityRegex() {
    }
    NameOrNnationalityRegex.validate = function (regex) {
        var NAME_REGEX = /^[a-z_A-Z]+\s?.*/;
        return NAME_REGEX.test(regex);
    };
    return NameOrNnationalityRegex;
}());
exports.NameOrNnationalityRegex = NameOrNnationalityRegex;
var NumberRegex = /** @class */ (function () {
    function NumberRegex() {
    }
    NumberRegex.validate = function (regex) {
        var ID_REGEX = /^[1-9]\d*$/;
        return ID_REGEX.test(regex);
    };
    return NumberRegex;
}());
exports.NumberRegex = NumberRegex;
