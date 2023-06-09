import {Coach} from "../Model/Coach";
import {Player} from "../Model/Player";
import {Role} from "../Model/Personnel";


export class FootballTeamManager {
    name: string;
    team: (Player | Coach)[] = [];


    constructor(name: string) {
        this.name = name;
    }

    getTeam() {
        return this.team;
    }

    getPlayers() {
        return this.team.filter(item => item instanceof Player);
    }

    getCoaches() {
        return this.team.filter(item => item instanceof Coach);
    }

    addPlayer(player: Player): void {
        this.team.push(player);
    }

    addCoach(coach: Coach): void {
        this.team.push(coach);
    }

    findIndexById(id: string) {
        return this.team.findIndex(item => item.getId() === id);
    }

    updatePlayer(index: number, player: Player): void {
        this.team[index] = player;
        console.log('Update cau thu thanh cong!');
    }

    updateCoach(index: number, coach: Coach): void {
        this.team[index] = coach;
        console.log('Update HLV thanh cong!');
    }

    deletePlayer(index): void {
        if (this.team[index] instanceof Player) {
            this.team.splice(index, 1);
            console.log('Xoa cau thu thanh cong!');
            return;
        }
        console.log('ID nhap vao khong phai la cau thu!');
    }

    deleteCoach(index: number): void {
        if (this.team[index] instanceof Coach) {
            this.team.splice(index, 1);
            console.log('Xoa cau thu thanh cong!');
            return;
        }
        console.log('ID nhap vao khong phai la HLV!');
    }

    caculateTotalSalary(player: Player) {
        let salary = 0;
        if (player.getNumberOfMatchesPlayed() >= 10) {
            salary = player.getSalary()
        } else if (player.getNumberOfMatchesPlayed() >= 7) {
            salary = player.getSalary() * 80 / 100;
        } else if (player.getNumberOfMatchesPlayed() >= 5) {
            salary = player.getSalary() * 50 / 100;
        } else if (player.getNumberOfMatchesPlayed() > 2) {
            salary = player.getSalary() * 20 / 100;
        } else {
            salary = player.getSalary() * 5 / 100;
        }
        let error = (player.getError() * 3 / 100) * player.getSalary();
        console.log(`Luong thuc nhan cua cau thu ${player.getName()} la ${salary - error}$`);
    }

    caculateCoachSalary(coach: Coach) {
        let salary = 0;
        if (coach.getWinMatch() >= 50) {
            salary = coach.getSalary() + coach.getSalary() * 0.5
        } else if (coach.getWinMatch() >= 30) {
            salary = coach.getSalary() + coach.getSalary() * 0.25
        } else {
            salary = coach.getSalary();
        }
        console.log(`Luong cua HLV ${coach.getName()} la ${salary}$`)
    }

    bonusCoach(coach: Coach) {
        let bonus = 0;
        if (coach.getNumberCup() >= 3) {
            bonus = coach.getSalary() * 2
        } else if (coach.getNumberCup() >= 1) {
            bonus = coach.getSalary()*0.5
        } else {
            console.log("Mua sau co gang nhe em")
        }
        console.log(`Thuong cua HLV ${coach.getName()} la ${bonus}$`)
    }
}


