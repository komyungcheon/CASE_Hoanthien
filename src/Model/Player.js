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
exports.Player = void 0;
var Personnel_1 = require("./Personnel");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(id, name, age, nationality, salary, position, numberOfMatchesPlayed, numberOfGoals, error) {
        var _this = _super.call(this, id, name, age, Personnel_1.Role.PLAYER, nationality, salary) || this;
        _this._position = position;
        _this._numberOfMatchesPlayed = numberOfMatchesPlayed;
        _this._numberGoals = numberOfGoals;
        _this._error = error;
        return _this;
    }
    Player.prototype.getPosition = function () {
        return this._position;
    };
    Player.prototype.setPosition = function (value) {
        this._position = value;
    };
    Player.prototype.getNumberOfMatchesPlayed = function () {
        return this._numberOfMatchesPlayed;
    };
    Player.prototype.setNumberOfMatchesPlayed = function (value) {
        this._numberOfMatchesPlayed = value;
    };
    Player.prototype.getNumberGoals = function () {
        return this._numberGoals;
    };
    Player.prototype.setNumberGoals = function (value) {
        this._numberGoals = value;
    };
    Player.prototype.getError = function () {
        return this._error;
    };
    Player.prototype.setError = function (value) {
        this._error = value;
    };
    return Player;
}(Personnel_1.Personnel));
exports.Player = Player;
