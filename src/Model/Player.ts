import {Personnel, Role} from "./Personnel";

export class Player extends Personnel {
    private _position: string;
    private _numberOfMatchesPlayed: number;

    private _numberGoals: number;
    private _error : number;

    constructor(id: string, name: string, age: number, nationality: string, salary: number, position: string, numberOfMatchesPlayed: number, numberOfGoals: number,error: number) {
        super(id, name, age, Role.PLAYER, nationality, salary);
        this._position = position;
        this._numberOfMatchesPlayed = numberOfMatchesPlayed;
        this._numberGoals = numberOfGoals;
        this._error = error;
    }

    getPosition(): string {
        return this._position;
    }

    setPosition(value: string) {
        this._position = value;
    }

    getNumberOfMatchesPlayed(): number {
        return this._numberOfMatchesPlayed;
    }

    setNumberOfMatchesPlayed(value: number) {
        this._numberOfMatchesPlayed = value;
    }

    getNumberGoals(): number {
        return this._numberGoals;
    }

    setNumberGoals(value: number) {
        this._numberGoals = value;
    }

    getError(): number {
        return this._error;
    }

    setError(value: number) {
        this._error = value;
    }
}
