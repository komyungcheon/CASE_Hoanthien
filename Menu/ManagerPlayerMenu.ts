import {readlineSync, team} from "../src/mains";
import {NameOrNnationalityRegex, NumberRegex} from "../src/Regex/RegexName";
import {Player} from "../src/Model/Player";
import {Coach} from "../src/Model/Coach";


export class ManagerPlayerMenu {

    static inputInfoPlayer() {
        let id = readlineSync.question('Nhap ID cau thu:');
        if (!NumberRegex.validate(id) || team.findIndexById(id) !== -1) {
            console.log('ID khong hop le hoac da ton tai');
            return;
        }
        let name = readlineSync.question('Nhap ten cau thu: ');
        if (!NameOrNnationalityRegex.validate(name)) {
            console.log('Ten khong hop le!');
            return;
        }
        let age = readlineSync.question("Nhap tuoi cau thu:");
        if (!NumberRegex.validate(age)) {
            console.log("Tuoi khong hop le !")
            return;
        }
        let nationality = readlineSync.question('Nhap quoc tich cua cau thu: ');
        if (!NameOrNnationalityRegex.validate(nationality)) {
            console.log('Quoc tich khong hop le!');
            return;
        }
        let salary = readlineSync.question("Nhap luong cua cau thu :")
        if (!NumberRegex.validate(salary)) {
            console.log("Luong khong hop le !Vui long nhap lai ")
            return;
        }
        let position = readlineSync.question("Nhap vi tri cua cau thu :")
        if (!NameOrNnationalityRegex.validate(position)) {
            console.log("Vi tri cau thu khong hop le")
        }
        let numberOfMatchesPlayed = readlineSync.question("Nhap so tran da thi dau :")
        if (!NumberRegex.validate(numberOfMatchesPlayed)) {
            console.log("So tran khong hop le !Vui long nhap lai")
            return;
        }
        let numberOfGoals = readlineSync.question("Nhap ban thang da ghi duoc :")
        if (!NumberRegex.validate(numberOfGoals)) {
            console.log("So ban thang khong hop le !Vui long nhap lai")
            return;
        }
        let errorPlayer = readlineSync.question("Nhap so loi  :")
        if (!NumberRegex.validate(errorPlayer)) {
            console.log("So loi khong hop le !Vui long nhap lai")
            return;
        }


        return new Player(
            id,
            name,
            parseInt(age),
            nationality,
            parseFloat(salary),
            position,
            parseInt(numberOfMatchesPlayed),
            parseInt(numberOfGoals),
            parseInt(errorPlayer)
        )
    }

    static addPlayer() {
        let player = this.inputInfoPlayer()
        if (player) {
            team.addPlayer(player)
            console.log("Them thanh cong")
        }
    }

    static updatePlayer() {
        let id = readlineSync.question('Nhap ID cau thu muon cap nhat: ');
        let indexOfPlayer = team.findIndexById(id);
        if (indexOfPlayer === -1 || team.getTeam()[indexOfPlayer] instanceof Coach) {
            console.log('id nhap vao khong phai cua bat ki cau thu nao!');
            return;
        }
        let playerUpdate = this.inputInfoPlayer();
        if (playerUpdate) {
            team.updatePlayer(indexOfPlayer, playerUpdate);
        }
    }

    static deletePlayer() {
        let id = readlineSync.question('Nhap ID cau thu muon xoa: ');
        let indexOfPlayer = team.findIndexById(id);
        if (indexOfPlayer === -1) {
            console.log('Khong tim thay cau thu');
            return;
        }
        team.deletePlayer(indexOfPlayer);
    }

    static showPlayer() {
        console.table(team.getPlayers());
    }

    static lookingForPlayerByName() {
        let name = readlineSync.question('Nhap vao ten cau thu muon tim kiem: ');
        let players = [];
        team.getPlayers().forEach(item => {
            if (item.getName().toLowerCase().includes(name.toLowerCase())) {
                players.push(item);
            }
        })
        if (players.length === 0) {
            console.log('Khong co du lieu phu hop!');
            return;
        }
        console.table(players);
    }

    static caculatePlayerSalary() {
        let id = readlineSync.question('Nhap ID cau thu muon tinh luong:');
        let player = team.getPlayers().find(item => item.getId() === id) as Player;
        if (!player) {
            console.log('Khong tim thay cau thu!');
            return;
        }
        team.caculateTotalSalary(player);
    }
}