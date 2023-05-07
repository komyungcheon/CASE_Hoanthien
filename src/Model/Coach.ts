import {Personnel, Role} from "./Personnel";

export class Coach extends Personnel {
    private _numberOfMatches: number;
    private _numberCup: number;
    private _winMatch : number;

    constructor (id: string, name: string, age: number, nationality: string, salary: number, numberOfMatches: number, numberCup: number,winMatch : number) {
        super(id, name, age, Role.COACH, nationality, salary);
        this._numberOfMatches = numberOfMatches;
        this._numberCup = numberCup;
        this._winMatch = winMatch;
    }

    getNumberOfMatches(): number {
        return this._numberOfMatches;
    }

    setNumberOfMatches(value: number) {
        this._numberOfMatches = value;
    }

    getNumberCup(): number {
        return this._numberCup;
    }

    setNumberCup(value: number) {
        this._numberCup = value;
    }

    getWinMatch(): number {
        return this._winMatch;
    }

    setWinMatch(value: number) {
        this._winMatch = value;
    }
}