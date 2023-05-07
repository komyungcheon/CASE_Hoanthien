"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballTeamManager = void 0;
var Coach_1 = require("../Model/Coach");
var Player_1 = require("../Model/Player");
var FootballTeamManager = /** @class */ (function () {
    function FootballTeamManager(name) {
        this.team = [];
        this.name = name;
    }
    FootballTeamManager.prototype.getTeam = function () {
        return this.team;
    };
    FootballTeamManager.prototype.getPlayers = function () {
        return this.team.filter(function (item) { return item instanceof Player_1.Player; });
    };
    FootballTeamManager.prototype.getCoaches = function () {
        return this.team.filter(function (item) { return item instanceof Coach_1.Coach; });
    };
    FootballTeamManager.prototype.addPlayer = function (player) {
        this.team.push(player);
    };
    FootballTeamManager.prototype.addCoach = function (coach) {
        this.team.push(coach);
    };
    FootballTeamManager.prototype.findIndexById = function (id) {
        return this.team.findIndex(function (item) { return item.getId() === id; });
    };
    FootballTeamManager.prototype.updatePlayer = function (index, player) {
        if (this.team[index] instanceof Player_1.Player) {
            this.team[index] = player;
            console.log('Update cau thu thanh cong!');
            return;
        }
        console.log('ID nhap vao khong phai la cau thu!');
    };
    FootballTeamManager.prototype.updateCoach = function (index, coach) {
        if (this.team[index] instanceof Coach_1.Coach) {
            this.team[index] = coach;
            console.log('Update HLV thanh cong!');
            return;
        }
        console.log('ID nhap vao khong phai la HLV!');
    };
    FootballTeamManager.prototype.deletePlayer = function (index) {
        if (this.team[index] instanceof Player_1.Player) {
            this.team.splice(index, 1);
            console.log('Xoa cau thu thanh cong!');
            return;
        }
        console.log('ID nhap vao khong phai la cau thu!');
    };
    FootballTeamManager.prototype.deleteCoach = function (index) {
        if (this.team[index] instanceof Coach_1.Coach) {
            this.team.splice(index, 1);
            console.log('Xoa cau thu thanh cong!');
            return;
        }
        console.log('ID nhap vao khong phai la HLV!');
    };
    FootballTeamManager.prototype.caculateTotalSalary = function (player) {
        var salary = 0;
        if (player.getNumberOfMatchesPlayed() >= 10) {
            salary = player.getSalary();
        }
        else if (player.getNumberOfMatchesPlayed() >= 7) {
            salary = player.getSalary() * 80 / 100;
        }
        else if (player.getNumberOfMatchesPlayed() >= 5) {
            salary = player.getSalary() * 50 / 100;
        }
        else if (player.getNumberOfMatchesPlayed() > 2) {
            salary = player.getSalary() * 20 / 100;
        }
        else {
            salary = player.getSalary() * 5 / 100;
        }
        var error = player.getError() * 3 / 100;
        console.log("Luong cua cau thu ".concat(player.getName(), " la ").concat(salary - error, "$"));
    };
    FootballTeamManager.prototype.caculateCoachSalary = function (coach) {
        var salary = 0;
        if (coach.getWinMatch() >= 50) {
            salary = coach.getWinMatch() + coach.getSalary() * 0.5;
        }
        else if (coach.getWinMatch() >= 30) {
            salary = coach.getWinMatch() + coach.getSalary() * 0.2;
        }
        else {
            salary = coach.getSalary();
        }
        console.log("Luong cua HLV ".concat(coach.getName(), "la ").concat(salary, "$"));
    };
    FootballTeamManager.prototype.bonusCoach = function (coach) {
        var salary = 0;
        if (coach.getNumberCup() >= 3) {
            salary = coach.getSalary() * 2;
        }
        else if (coach.getNumberCup() < 3) {
            salary = coach.getSalary();
        }
        else {
            console.log("Mua sau co gang nhe em");
        }
        console.log("Thuong cua HLV la ".concat(coach.getName(), " la ").concat(salary, "$"));
    };
    return FootballTeamManager;
}());
exports.FootballTeamManager = FootballTeamManager;
