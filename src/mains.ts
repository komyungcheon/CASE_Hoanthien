import {FootballTeamManager} from "./FootballTeamManager/FootballTeamManager";
import {ManagerCoachMenu} from "../Menu/ManagerCoachMenu";
import {ManagerPlayerMenu} from "../Menu/ManagerPlayerMenu";
import {Player} from "./Model/Player";
import {Coach} from "./Model/Coach";

export const readlineSync = require('readline-sync');
export const team = new FootballTeamManager('real')
team.addPlayer(new Player("1", "Ronaldo", 39, "Bo dao nha", 90000, "ST", 6, 50, 1))
team.addPlayer(new Player("2", "Messi", 35, "Ac hen ti na", 50000, "RW", 50, 30, 4))
team.addPlayer(new Player("3", "Alison", 30, "Brazil", 40000, "GK", 49, 0, 5))
team.addCoach(new Coach("4", "Tuchel", 55, "Duc", 200000, 100, 1, 50));
team.addCoach(new Coach("5", "Pep", 60, "Tay ban nha", 100000, 30, 4, 60));

function init() {
    const mainMenu: string[] = [
        'Player Manager',
        'Coach Manager',
        'Show Team',
    ]
    let loop = true;
    while (loop) {
        let index: number = readlineSync.keyInSelect(mainMenu, 'Chon chuc nang:');
        switch (index) {
            case 0:
                menuPlayerManager();
                break;
            case 1:
                menuCoachManager();
                break;
            case 2 :
                console.table(team.getTeam());
                break;
            default:
                if (readlineSync.keyInYN('Xac nhan thoat chuong trinh:')) {
                    loop = false;
                }
                break
        }

    }

}

function menuCoachManager() {
    const menuCoach: string[] = [
        'addCoach',
        'updateCoach',
        'deleteCoach',
        'showCoach',
        'lookingForCoachByName',
        'salaryCalculateCoach',
        'bonusCoach'
    ]
    let loop = true;
    while (loop) {
        let index: number = readlineSync.keyInSelect(menuCoach, 'Chon chuc nang:');
        switch (index) {
            case 0:
                ManagerCoachMenu.addCoach();
                break;
            case 1:
                ManagerCoachMenu.updateCoach();
                break;
            case 2:
                ManagerCoachMenu.deleteCoach();
                break;
            case 3 :
                ManagerCoachMenu.showCoach();
                break;
            case 4 :
                ManagerCoachMenu.lookingForCoachByName();
                break;
            case 5 :
                ManagerCoachMenu.caculateCoachSalary();
                break;
            case 6 :
                ManagerCoachMenu.bonusCoach();
                break;
            default:
                if (readlineSync.keyInYN('Xac nhan thoat chuong trinh:')) {
                    loop = false;
                }
                break;
        }

    }
}
function menuPlayerManager() {
    const menuPlayer: string[] = [
        'addPlayer',
        'updatePlayer',
        'deletePlayer',
        'showPlayers',
        'lookingForPlayerByName',
        'salaryCalculatePlayer'

    ]
    let loop = true;
    while (loop) {
        let index: number = readlineSync.keyInSelect(menuPlayer, 'Chon chuc nang:');
        switch (index) {
            case 0:
                ManagerPlayerMenu.addPlayer();
                break;
            case 1:
                ManagerPlayerMenu.updatePlayer();
                break;
            case 2:
                ManagerPlayerMenu.deletePlayer();
                break;
            case 3 :
                ManagerPlayerMenu.showPlayer();
                break;
            case 4 :
                ManagerPlayerMenu.lookingForPlayerByName()
                break;
            case 5 :
                ManagerPlayerMenu.caculatePlayerSalary()
                break;
            default:
                if (readlineSync.keyInYN('Xac nhan thoat chuong trinh:')) {
                    loop = false;
                }
                break;
        }

    }
}
init();
