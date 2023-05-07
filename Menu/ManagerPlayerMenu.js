"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerPlayerMenu = void 0;
var mains_1 = require("../src/mains");
var RegexName_1 = require("../src/Regex/RegexName");
var Player_1 = require("../src/Model/Player");
var Coach_1 = require("../src/Model/Coach");
var ManagerPlayerMenu = /** @class */ (function () {
    function ManagerPlayerMenu() {
    }
    ManagerPlayerMenu.inputInfoPlayer = function () {
        var id = mains_1.readlineSync.question('Nhap ID cau thu:');
        if (!RegexName_1.NumberRegex.validate(id) || mains_1.team.findIndexById(id) !== -1) {
            console.log('ID khong hop le hoac da ton tai');
            return;
        }
        var name = mains_1.readlineSync.question('Nhap ten cau thu: ');
        if (!RegexName_1.NameOrNnationalityRegex.validate(name)) {
            console.log('Ten khong hop le!');
            return;
        }
        var age = mains_1.readlineSync.question("Nhap tuoi cau thu:");
        if (!RegexName_1.NumberRegex.validate(age)) {
            console.log("Tuoi khong hop le !");
            return;
        }
        var nationality = mains_1.readlineSync.question('Nhap quoc tich cua cau thu: ');
        if (!RegexName_1.NameOrNnationalityRegex.validate(nationality)) {
            console.log('Quoc tich khong hop le!');
            return;
        }
        var salary = mains_1.readlineSync.question("Nhap luong cua cau thu :");
        if (!RegexName_1.NumberRegex.validate(salary)) {
            console.log("Luong khong hop le !Vui long nhap lai ");
            return;
        }
        var position = mains_1.readlineSync.question("Nhap vi tri cua cau thu :");
        if (!RegexName_1.NameOrNnationalityRegex.validate(position)) {
            console.log("Vi tri cau thu khong hop le");
        }
        var numberOfMatchesPlayed = mains_1.readlineSync.question("Nhap so tran da thi dau :");
        if (!RegexName_1.NumberRegex.validate(numberOfMatchesPlayed)) {
            console.log("So tran khong hop le !Vui long nhap lai");
            return;
        }
        var numberOfGoals = mains_1.readlineSync.question("Nhap ban thang da ghi duoc :");
        if (!RegexName_1.NumberRegex.validate(numberOfGoals)) {
            console.log("So ban thang khong hop le !Vui long nhap lai");
            return;
        }
        var errorPlayer = mains_1.readlineSync.question("Nhap so loi  :");
        if (!RegexName_1.NumberRegex.validate(errorPlayer)) {
            console.log("So loi khong hop le !Vui long nhap lai");
            return;
        }
        return new Player_1.Player(id, name, parseInt(age), nationality, parseFloat(salary), position, parseInt(numberOfMatchesPlayed), parseInt(numberOfGoals), parseInt(errorPlayer));
    };
    ManagerPlayerMenu.addPlayer = function () {
        var player = this.inputInfoPlayer();
        if (player) {
            mains_1.team.addPlayer(player);
            console.log("Them thanh cong");
        }
    };
    ManagerPlayerMenu.updatePlayer = function () {
        var id = mains_1.readlineSync.question('Nhap ID cau thu muon cap nhat: ');
        var indexOfPlayer = mains_1.team.findIndexById(id);
        if (indexOfPlayer === -1 || mains_1.team.getTeam()[indexOfPlayer] instanceof Coach_1.Coach) {
            console.log('id nhap vao khong phai cua bat ki cau thu nao!');
            return;
        }
        var playerUpdate = this.inputInfoPlayer();
        if (playerUpdate) {
            mains_1.team.updatePlayer(indexOfPlayer, playerUpdate);
        }
    };
    ManagerPlayerMenu.deletePlayer = function () {
        var id = mains_1.readlineSync.question('Nhap ID cau thu muon xoa: ');
        var indexOfPlayer = mains_1.team.findIndexById(id);
        if (indexOfPlayer === -1) {
            console.log('Khong tim thay cau thu');
            return;
        }
        mains_1.team.deletePlayer(indexOfPlayer);
    };
    ManagerPlayerMenu.showPlayer = function () {
        console.table(mains_1.team.getPlayers());
    };
    ManagerPlayerMenu.lookingForPlayerByName = function () {
        var name = mains_1.readlineSync.question('Nhap vao ten cau thu muon tim kiem: ');
        var players = [];
        mains_1.team.getPlayers().forEach(function (item) {
            if (item.getName().toLowerCase().includes(name.toLowerCase())) {
                players.push(item);
            }
        });
        if (players.length === 0) {
            console.log('Khong co du lieu phu hop!');
            return;
        }
        console.table(players);
    };
    ManagerPlayerMenu.caculatePlayerSalary = function () {
        var id = mains_1.readlineSync.question('Nhap ID cau thu muon tinh luong:');
        var player = mains_1.team.getPlayers().find(function (item) { return item.getId() === id; });
        if (!player) {
            console.log('Khong tim thay cau thu!');
            return;
        }
        mains_1.team.caculateTotalSalary(player);
    };
    return ManagerPlayerMenu;
}());
exports.ManagerPlayerMenu = ManagerPlayerMenu;
