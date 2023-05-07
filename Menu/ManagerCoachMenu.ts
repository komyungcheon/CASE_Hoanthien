import { readlineSync, team} from "../src/mains";
import {NameOrNnationalityRegex, NumberRegex} from "../src/Regex/RegexName";
import {Coach} from "../src/Model/Coach";
import {Player} from "../src/Model/Player";

export class ManagerCoachMenu {

    static inputInfoCoach() {
        let id = readlineSync.question('Nhap ID HLV:');
        if (!NameOrNnationalityRegex.validate(id) || team.findIndexById(id) !== -1) {
            console.log('ID khong hop le hoav da ton tai');
            return;
        }
        let name = readlineSync.question('Nhap ten HLV: ');
        if (!NameOrNnationalityRegex.validate(name)) {
            console.log('Ten khong hop le!');
            return;
        }
        let age = readlineSync.question("Nhap tuoi HLV");
        if (!NumberRegex.validate(age)) {
            console.log("Tuoi khong hop le !")
            return;
        }
        let nationality = readlineSync.question('Nhap quoc tich cua HLV: ');
        if (!NameOrNnationalityRegex.validate(nationality)) {
            console.log('Quoc tich khong hop le!');
            return;
        }
        let salary = readlineSync.question("Nhap luong cua HLV")
        if (!NumberRegex.validate(salary)) {
            console.log("Luong khong hop le !Vui long nhap lai")
            return;
        }
        let numberOfMatches = readlineSync.question("Nhap so tran da dan dat cua HLV")
        if (!NumberRegex.validate(numberOfMatches)) {
            console.log("So tran k dung !Vui long nhap lai")
            return;
        }
        let numberCup = readlineSync.question("Nhap cup da danh duoc cua HLV")
        if (!NumberRegex.validate(numberCup)) {
            console.log("So cup k dung !Vui long nhap lai")
            return;
        }
        let winMatch = readlineSync.question("Nhap so tran thang da dan dat cua HLV")
            if (!NumberRegex.validate(winMatch)) {
                console.log("So tran thang khong dung !Vui long nhap lai")
                return;
        }
        return new Coach(
            id,
            name,
            parseInt(age),
            nationality,
            parseFloat(salary),
            parseInt(numberOfMatches),
            parseInt(numberCup),
            parseInt(winMatch),
        )
    }

    static addCoach() {
        let coach = this.inputInfoCoach()
        if (coach){
            team.addCoach(coach)
            console.log("Them thanh cong")
        }
    }

    static updateCoach(){
        let id = readlineSync.question('Nhap ID HLV muon cap nhat: ');
        let indexOfCoach = team.findIndexById(id);
        if (indexOfCoach === -1) {
            console.log('Khong tim thay HLV!');
            return;
        }
        let coachUpdate = this.inputInfoCoach();
        team.updateCoach(indexOfCoach, coachUpdate);
    }

    static deleteCoach() {
        let id = readlineSync.question('Nhap ID HLV muon xoa: ');
        let indexOfCoach = team.findIndexById(id);
        if (indexOfCoach === -1) {
            console.log('Khong tim thay HLV!');
            return;
        }
        team.deleteCoach(indexOfCoach);
    }

    static showCoach() {
        console.table(team.getCoaches());
    }

    static lookingForCoachByName() {
        let name = readlineSync.question('Nhap vao ten: ');
        let coaches = [];
        team.getCoaches().forEach(item => {
            if (item.getName().toLowerCase().includes(name.toLowerCase())) {
                coaches.push(item);
            }
        })
        if (coaches.length === 0) {
            console.log('Khong co du lieu phu hop!');
            return;
        }
        console.table(coaches);
    }
    static caculateCoachSalary() {
        let id = readlineSync.question('Nhap ID HLV muon tinh luong:');
        let coach = team.getCoaches().find(item => item.getId() === id) as Coach;
        if (!coach) {
            console.log('Khong tim thay HLV!');
            return;
        }
        team.caculateCoachSalary(coach)
    }
    static bonusCoach(){
        let id = readlineSync.question('Nhap ID HLV muon tinh thuong:');
        let coach = team.getCoaches().find(item => item.getId() === id) as Coach;
        if (!coach) {
            console.log('Khong tim thay HLV!');
            return;
        }
        team.bonusCoach(coach);
    }
}