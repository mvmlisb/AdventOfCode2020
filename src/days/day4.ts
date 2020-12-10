import {inRange} from "../range";

enum HeightUnit {
    IN ="in",
    CM = "cm"
}

interface Field {
    name: string;
    isRequired: boolean;
    isValid: (value: string) => boolean;
}

const requiredFields: Field[] = [
    {
        name: "byr",
        isRequired: true,
        isValid: (value: string) => inRange(parseInt(value), {start: 1920, end: 2002}),
    },
    {
        name: "iyr",
        isRequired: true,
        isValid: (value: string) => inRange(parseInt(value), {start: 2010, end: 2020}),
    },
    {
        name: "eyr",
        isRequired: true,
        isValid: (value: string) => inRange(parseInt(value), {start: 2020, end: 2030}),
    },
    {
        name: "hgt",
        isRequired: true,
        isValid: (value: string) => isValidHeight(value),
    },
    {
        name: "hcl",
        isRequired: true,
        isValid: (value: string) => value.match("#[0-9,a-f]{6}") !== null,
    },
    {
        name: "ecl",
        isRequired: true,
        isValid: (value: string) => value.match("^(amb|blu|brn|gry|grn|hzl|oth)$") != null
    },
    {
        name: "pid",
        isRequired: true,
        isValid: (value: string) => value.match("^[0-9]{9}$") !== null,
    },
];

function isValidHeight(value: string) {
    if (!value.match( `^\\d*${HeightUnit.CM}|${HeightUnit.IN}`) === null)
        return false;

    const height = parseInt(value);
    const range = value.endsWith(HeightUnit.CM) ? {start: 150, end: 193} : {start: 59, end: 76};
    return inRange(height, range);
}

function isValidPassportData(data: string, needToValidateValue: boolean) {
    for (const field of requiredFields) {
        if (field.isRequired && !data.includes(`${field.name}:`))
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

export function parsePassportData(lines: string[]) {
    return lines.reduce((acc, line) => {
        acc += line.length > 0 ? `${line} ` : " ";
        return acc;
    }, "").split("  ");
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