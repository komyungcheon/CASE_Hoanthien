
export enum Role {
    PLAYER = 'Player',
    COACH = 'Coach',
}

export class Personnel {
    private _id: string;
    private _name: string;
    private _age: number;
    private _role: Role;
    private _nationality: string;
    private _salary: number;


    constructor(id: string, name: string, age: number, role: Role, nationality: string, salary: number) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._role = role;
        this._nationality = nationality;
        this._salary = salary;
    }


    getId(): string {
        return this._id;
    }

    setId(value: string) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }

    getRole(): Role {
        return this._role;
    }

    setRole(value: Role) {
        this._role = value;
    }

    getNationality(): string {
        return this._nationality;
    }

    setNationality(value: string) {
        this._nationality = value;
    }

    getSalary(): number {
        return this._salary;
    }

    setSalary(value: number) {
        this._salary = value;
    }
}