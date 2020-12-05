interface PasswordData {
    range: Range;
    char: string;
    password: string;
}

interface Range {
    start: number;
    end: number;
}

export function executeFirstTask(data: PasswordData[]){
    const isValidData = (data: PasswordData) => {
        const length = [...data.password].filter(charFromStr => charFromStr === data.char).length;
        return length >= data.range.start && length <= data.range.end;
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

function parseRange(range: string): Range {
    const splitted = range.split("-");

    if (splitted.length !== 2)
        throw new Error("Invalid range");

    return {start: parseInt(splitted[0]), end: parseInt(splitted[1])} as Range;
}