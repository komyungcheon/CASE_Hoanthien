"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personnel = exports.Role = void 0;
var Role;
(function (Role) {
    Role["PLAYER"] = "Player";
    Role["COACH"] = "Coach";
})(Role = exports.Role || (exports.Role = {}));
var Personnel = /** @class */ (function () {
    function Personnel(id, name, age, role, nationality, salary) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._role = role;
        this._nationality = nationality;
        this._salary = salary;
    }
    Personnel.prototype.getId = function () {
        return this._id;
    };
    Personnel.prototype.setId = function (value) {
        this._id = value;
    };
    Personnel.prototype.getName = function () {
        return this._name;
    };
    Personnel.prototype.setName = function (value) {
        this._name = value;
    };
    Personnel.prototype.getAge = function () {
        return this._age;
    };
    Personnel.prototype.setAge = function (value) {
        this._age = value;
    };
    Personnel.prototype.getRole = function () {
        return this._role;
    };
    Personnel.prototype.setRole = function (value) {
        this._role = value;
    };
    Personnel.prototype.getNationality = function () {
        return this._nationality;
    };
    Personnel.prototype.setNationality = function (value) {
        this._nationality = value;
    };
    Personnel.prototype.getSalary = function () {
        return this._salary;
    };
    Personnel.prototype.setSalary = function (value) {
        this._salary = value;
    };
    return Personnel;
}());
exports.Personnel = Personnel;
