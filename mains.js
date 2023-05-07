"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.team = exports.readlineSync = void 0;
var FootballTeamManager_1 = require("./src/FootballTeamManager/FootballTeamManager");
var ManagerCoachMenu_1 = require("./src/Menu/ManagerCoachMenu");
var ManagerPlayerMenu_1 = require("./src/Menu/ManagerPlayerMenu");
var Player_1 = require("./src/Model/Player");
var Coach_1 = require("./src/Model/Coach");
exports.readlineSync = require('readline-sync');
exports.team = new FootballTeamManager_1.FootballTeamManager('real');
exports.team.addPlayer(new Player_1.Player("1", "Ronaldo", 39, "Bo dao nha", 90000, "ST", 6, 50, 1));
exports.team.addPlayer(new Player_1.Player("2", "Messi", 35, "Ac hen ti na", 50000, "RW", 50, 30, 4));
exports.team.addPlayer(new Player_1.Player("3", "Alison", 30, "Brazil", 40000, "GK", 49, 0, 5));
exports.team.addCoach(new Coach_1.Coach("4", "Tuchel", 55, "Duc", 150000, 100, 0, 50));
exports.team.addCoach(new Coach_1.Coach("5", "Pep", 60, "Tay ban nha", 100000, 30, 4, 60));
function init() {
    var mainMenu = [
        'Player Manager',
        'Coach Manager',
        'Show Team',
    ];
    var loop = true;
    while (loop) {
        var index = exports.readlineSync.keyInSelect(mainMenu, 'Chon chuc nang:');
        switch (index) {
            case 0:
                menuPlayerManager();
                break;
            case 1:
                menuCoachManager();
                break;
            case 2:
                console.table(exports.team.getTeam());
                break;
            default:
                if (exports.readlineSync.keyInYN('Xac nhan thoat chuong trinh:')) {
                    loop = false;
                }
                break;
        }
    }
}
function menuCoachManager() {
    var menuCoach = [
        'addCoach',
        'updateCoach',
        'deleteCoach',
        'showCoach',
        'lookingForCoachByName',
        'salaryCalculateCoach',
        'bonusCoach'
    ];
    var loop = true;
    while (loop) {
        var index = exports.readlineSync.keyInSelect(menuCoach, 'Chon chuc nang:');
        switch (index) {
            case 0:
                ManagerCoachMenu_1.ManagerCoachMenu.addCoach();
                break;
            case 1:
                ManagerCoachMenu_1.ManagerCoachMenu.updateCoach();
                break;
            case 2:
                ManagerCoachMenu_1.ManagerCoachMenu.deleteCoach();
                break;
            case 3:
                ManagerCoachMenu_1.ManagerCoachMenu.showCoach();
                break;
            case 4:
                ManagerCoachMenu_1.ManagerCoachMenu.lookingForCoachByName();
                break;
            case 5:
                ManagerCoachMenu_1.ManagerCoachMenu.caculateCoachSalary();
                break;
            case 6:
                ManagerCoachMenu_1.ManagerCoachMenu.bonusCoach();
                break;
            default:
                if (exports.readlineSync.keyInYN('Xac nhan thoat chuong trinh:')) {
                    loop = false;
                }
                break;
        }
    }
}
function menuPlayerManager() {
    var menuPlayer = [
        'addPlayer',
        'updatePlayer',
        'deletePlayer',
        'showPlayers',
        'lookingForPlayerByName',
        'salaryCalculatePlayer'
    ];
    var loop = true;
    while (loop) {
        var index = exports.readlineSync.keyInSelect(menuPlayer, 'Chon chuc nang:');
        switch (index) {
            case 0:
                ManagerPlayerMenu_1.ManagerPlayerMenu.addPlayer();
                break;
            case 1:
                ManagerPlayerMenu_1.ManagerPlayerMenu.updatePlayer();
                break;
            case 2:
                ManagerPlayerMenu_1.ManagerPlayerMenu.deletePlayer();
                break;
            case 3:
                ManagerPlayerMenu_1.ManagerPlayerMenu.showPlayer();
                break;
            case 4:
                ManagerPlayerMenu_1.ManagerPlayerMenu.lookingForPlayerByName();
                break;
            case 5:
                ManagerPlayerMenu_1.ManagerPlayerMenu.caculatePlayerSalary();
                break;
            default:
                if (exports.readlineSync.keyInYN('Xac nhan thoat chuong trinh:')) {
                    loop = false;
                }
                break;
        }
    }
}
init();
