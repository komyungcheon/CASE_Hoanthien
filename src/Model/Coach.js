"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
var Personnel_1 = require("./Personnel");
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach(id, name, age, nationality, salary, numberOfMatches, numberCup, winMatch) {
        var _this = _super.call(this, id, name, age, Personnel_1.Role.COACH, nationality, salary) || this;
        _this._numberOfMatches = numberOfMatches;
        _this._numberCup = numberCup;
        _this._winMatch = winMatch;
        return _this;
    }
    Coach.prototype.getNumberOfMatches = function () {
        return this._numberOfMatches;
    };
    Coach.prototype.setNumberOfMatches = function (value) {
        this._numberOfMatches = value;
    };
    Coach.prototype.getNumberCup = function () {
        return this._numberCup;
    };
    Coach.prototype.setNumberCup = function (value) {
        this._numberCup = value;
    };
    Coach.prototype.getWinMatch = function () {
        return this._winMatch;
    };
    Coach.prototype.setWinMatch = function (value) {
        this._winMatch = value;
    };
    return Coach;
}(Personnel_1.Personnel));
exports.Coach = Coach;
