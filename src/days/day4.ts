import {Range} from "./day2";

enum HeightUnit {
    IN ="in",
    CM = "cm"
}

interface Field {
    name: string;
    isValid: (value: string) => boolean;
}

const requiredFields: Field[] = [
    {
        name: "byr",
        isValid: (value: string) => inRange(value, {start: 1920, end: 2002}),
    },
    {
        name: "iyr",
        isValid: (value: string) => inRange(value, {start: 2010, end: 2020}),
    },
    {
        name: "eyr",
        isValid: (value: string) => inRange(value, {start: 2020, end: 2030}),
    },
    {
        name: "hgt",
        isValid: (value: string) => isValidHeight(value),
    },
    {
        name: "hcl",
        isValid: (value: string) => value.match("#[0-9,a-f]{6}") !== null,
    },
    {
        name: "ecl",
        isValid: (value: string) =>
            ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].some(element => element === value),
    },
    {
        name: "pid",
        isValid: (value: string) => value.match("^[0-9]{9}$") !== null,
    },
];

function isValidHeight(value: string) {
    if (!value.endsWith(HeightUnit.CM) && !value.endsWith(HeightUnit.IN))
        return false;

    const indexOfSuffix = value.length - 2;
    const suffix = value.substr(indexOfSuffix, 2);
    const prefix = value.substring(0, indexOfSuffix);
    const range = suffix === HeightUnit.CM ? {start: 150, end: 193} : {start: 59, end: 76};
    return inRange(prefix, range);
}

function isValidPassportData(data: string, needToValidateValue: boolean) {
    for (const field of requiredFields) {
        if (!data.includes(`${field.name}:`))
            return false;

        if (needToValidateValue && !field.isValid(getValueByKey(field.name, data)))
            return false;
    }
    return true;
}

function getValueByKey(key: string, string: string) {
    return string
        .split(" ")
        .filter(str => str.startsWith(`${key}:`))[0]
        .split(":")[1];
}

export function inRange(value: string, range: Range) {
    if (value.match("^\\d*$") === null) {
        return false;
    }

    const number = parseInt(value);
    return number >= range.start && number <= range.end;
}

function executeTask(data: string[], needToValidateValue: boolean) {
    let count = 0;
    data.forEach(data => {
        if (isValidPassportData(data, needToValidateValue)) {
            count++;
        }
    })
    return count;
}

export function executeFirstTask(passportData: string[]){
    return executeTask(passportData, false);
}

export function executeSecondTask(passportData: string[]){
    return executeTask(passportData, true);
}

export function parsePassportData(lines: string[]) {
    return lines.reduce((acc, line) => {
        acc += line.length > 0 ? `${line} ` : " ";
        return acc;
    }, "").split("  ");
}