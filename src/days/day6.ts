import {Constants} from "../constants";

const personSeparator = "|";

function splitDataOnGroups(data: string, personSeparator: string) {
    const result: string[] = [];
    let group = "";

    data.split(Constants.newline).forEach(str => {

        if (str.length > 0) {
            group += `${str}${personSeparator}`;
        }
        else {
            result.push(group);
            group = "";
        }
    })

    result.push(group);

    return result;
}

export function replaceRepeatedChars(string: string) {
    return string.replace(/(.)(?=.*\1)/g, "");
}

export function countRepeatedChars(string: string, personSeparator: string) {
    const answersOfPersons = string.split(personSeparator)
    if (answersOfPersons.length === 1)
        return answersOfPersons.length

    let count = 0;
    const alreadyCountedChars: string[] = [personSeparator];

    for (let i = 0; i < string.length; i++) {
        const current = string[i];

        for (let j = i + 1; j < string.length; j++) {
            const next = string[j];

            if (current === next && !alreadyCountedChars.includes(current)) {
                count++;
                alreadyCountedChars.push(current);
                break;
            }
        }
    }

    return count;
}

export function executeFirstTask(data: string) {
    let count = 0;
    splitDataOnGroups(data, "").forEach(group => count += replaceRepeatedChars(group).length);
    return count;
}

export function executeSecondTask(data: string) {
    let count = 0;
    splitDataOnGroups(data, personSeparator).forEach(group => count += countRepeatedChars(group, personSeparator));
    return count;
}

