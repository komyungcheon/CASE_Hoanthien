export class NameOrNnationalityRegex {
      static validate(regex: string): boolean {
        let NAME_REGEX = /^[a-z_A-Z]+\s?.*/;
        return  NAME_REGEX.test(regex);
    }
}
export class NumberRegex {
    static validate(regex: string): boolean {
        let ID_REGEX = /^[1-9]\d*$/;
        return  ID_REGEX.test(regex);
    }
}



