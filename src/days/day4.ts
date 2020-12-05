import {Constants} from "../Constants";

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

export function executeFirstTask(passportData: string[]){
    let count = 0;
    passportData.forEach(data => {
        if (isValidPassportData(data)) {
            count++;
        }
    })
    return count;
}

function isValidPassportData(data: string) {
    for (let field of requiredFields) {
        if (!data.includes(`${field}:`)) {
            return false;
        }
    }
    return true;
}

export function parsePassportData(lines: string[]) {
    return lines.reduce((acc, line) => {
        acc += line.length > 0 ? line : Constants.newline
        return acc;
    }).split(Constants.newline);
}

// export function executeSecondTask(data: PasswordData[]){
//     const isValidData = (data: PasswordData) => {
//         const isFirstPositionValid = data.password.charAt(data.range.start - 1) === data.char
//         const isSecondPositionValid = data.password.charAt(data.range.end - 1) === data.char
//         return (isFirstPositionValid && !isSecondPositionValid)
//             || (isSecondPositionValid && !isFirstPositionValid)
//     };
//
//     return executeTask(data, isValidData)
// }




