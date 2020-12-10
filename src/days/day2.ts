import {inRange, parseRange, Range} from "../range";

interface PasswordData {
    range: Range;
    char: string;
    password: string;
}

export function executeFirstTask(data: PasswordData[]){
    const isValidData = (data: PasswordData) => {
        const length = [...data.password].filter(charFromStr => charFromStr === data.char).length;
        return inRange(length, data.range)
    };

    return executeTask(data, isValidData)
}

export function executeSecondTask(data: PasswordData[]){
    const isValidData = (data: PasswordData) => {
        const isFirstPositionValid = data.password.charAt(data.range.start - 1) === data.char
        const isSecondPositionValid = data.password.charAt(data.range.end - 1) === data.char
        return (isFirstPositionValid && !isSecondPositionValid)
            || (isSecondPositionValid && !isFirstPositionValid)
    };

    return executeTask(data, isValidData)
}

function executeTask(data: PasswordData[], isValidData: (data: PasswordData) => boolean) {
    return data.filter(data => isValidData(data)).length;
}

export function parsePasswordData(str: string) {
    const splitted = str.split(" ");

    if (splitted.length !== 3)
        throw new Error("Invalid argument");

    const range = parseRange(splitted[0]);
    const char = splitted[1][0];
    const password = splitted[2];

    return {range: range, char: char, password: password} as PasswordData;
}

