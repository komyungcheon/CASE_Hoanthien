"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerCoachMenu = void 0;
var mains_1 = require("../src/mains");
var RegexName_1 = require("../src/Regex/RegexName");
var Coach_1 = require("../src/Model/Coach");
var ManagerCoachMenu = /** @class */ (function () {
    function ManagerCoachMenu() {
    }
    ManagerCoachMenu.inputInfoCoach = function () {
        var id = mains_1.readlineSync.question('Nhap ID HLV:');
        if (!RegexName_1.NameOrNnationalityRegex.validate(id) || mains_1.team.findIndexById(id) !== -1) {
            console.log('ID khong hop le hoav da ton tai');
            return;
        }
        var name = mains_1.readlineSync.question('Nhap ten HLV: ');
        if (!RegexName_1.NameOrNnationalityRegex.validate(name)) {
            console.log('Ten khong hop le!');
            return;
        }
        var age = mains_1.readlineSync.question("Nhap tuoi HLV");
        if (!RegexName_1.NumberRegex.validate(age)) {
            console.log("Tuoi khong hop le !");
            return;
        }
        var nationality = mains_1.readlineSync.question('Nhap quoc tich cua HLV: ');
        if (!RegexName_1.NameOrNnationalityRegex.validate(nationality)) {
            console.log('Quoc tich khong hop le!');
            return;
        }
        var salary = mains_1.readlineSync.question("Nhap luong cua HLV");
        if (!RegexName_1.NumberRegex.validate(salary)) {
            console.log("Luong khong hop le !Vui long nhap lai");
            return;
        }
        var numberOfMatches = mains_1.readlineSync.question("Nhap so tran da dan dat cua HLV");
        if (!RegexName_1.NumberRegex.validate(numberOfMatches)) {
            console.log("So tran k dung !Vui long nhap lai");
            return;
        }
        var numberCup = mains_1.readlineSync.question("Nhap cup da danh duoc cua HLV");
        if (!RegexName_1.NumberRegex.validate(numberCup)) {
            console.log("So cup k dung !Vui long nhap lai");
            return;
        }
        var winMatch = mains_1.readlineSync.question("Nhap so tran thang da dan dat cua HLV");
        if (!RegexName_1.NumberRegex.validate(winMatch)) {
            console.log("So tran thang khong dung !Vui long nhap lai");
            return;
        }
        return new Coach_1.Coach(id, name, parseInt(age), nationality, parseFloat(salary), parseInt(numberOfMatches), parseInt(numberCup), parseInt(winMatch));
    };
    ManagerCoachMenu.addCoach = function () {
        var coach = this.inputInfoCoach();
        if (coach) {
            mains_1.team.addCoach(coach);
            console.log("Them thanh cong");
        }
    };
    ManagerCoachMenu.updateCoach = function () {
        var id = mains_1.readlineSync.question('Nhap ID HLV muon cap nhat: ');
        var indexOfCoach = mains_1.team.findIndexById(id);
        if (indexOfCoach === -1) {
            console.log('Khong tim thay HLV!');
            return;
        }
        var coachUpdate = this.inputInfoCoach();
        mains_1.team.updateCoach(indexOfCoach, coachUpdate);
    };
    ManagerCoachMenu.deleteCoach = function () {
        var id = mains_1.readlineSync.question('Nhap ID HLV muon xoa: ');
        var indexOfCoach = mains_1.team.findIndexById(id);
        if (indexOfCoach === -1) {
            console.log('Khong tim thay HLV!');
            return;
        }
        mains_1.team.deleteCoach(indexOfCoach);
    };
    ManagerCoachMenu.showCoach = function () {
        console.table(mains_1.team.getCoaches());
    };
    ManagerCoachMenu.lookingForCoachByName = function () {
        var name = mains_1.readlineSync.question('Nhap vao ten: ');
        var coaches = [];
        mains_1.team.getCoaches().forEach(function (item) {
            if (item.getName().toLowerCase().includes(name.toLowerCase())) {
                coaches.push(item);
            }
        });
        if (coaches.length === 0) {
            console.log('Khong co du lieu phu hop!');
            return;
        }
        console.table(coaches);
    };
    ManagerCoachMenu.caculateCoachSalary = function () {
        var id = mains_1.readlineSync.question('Nhap ID HLV muon tinh luong:');
        var coach = mains_1.team.getCoaches().find(function (item) { return item.getId() === id; });
        if (!coach) {
            console.log('Khong tim thay HLV!');
            return;
        }
        mains_1.team.caculateCoachSalary(coach);
    };
    ManagerCoachMenu.bonusCoach = function () {
        var id = mains_1.readlineSync.question('Nhap ID HLV muon tinh thuong:');
        var coach = mains_1.team.getCoaches().find(function (item) { return item.getId() === id; });
        if (!coach) {
            console.log('Khong tim thay HLV!');
            return;
        }
        mains_1.team.bonusCoach(coach);
    };
    return ManagerCoachMenu;
}());
exports.ManagerCoachMenu = ManagerCoachMenu;
