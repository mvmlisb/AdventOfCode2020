import {Constants} from "../constants";

function splitDataOnGroups(data: string) {
    const groups: string[][] = [];
    let group: string[] = [];

    data.split(Constants.newline).forEach(str => {
        if (str.length > 0) {
            group.push(str);
        } else {
            groups.push(group);
            group = [];
        }
    });

    groups.push(group);

    return groups;
}

function replaceRepeatedChars(string: string) {
    return string.replace(/(.)(?=.*\1)/g, "");
}

export function findIntersectionsOfStrings(a: string, b: string) {
    return [...a].filter(char => [...b].includes(char)).join("");
}

function findIntersectionsInArray(strings: string[]){
    return strings.reduce((acc, next) =>
        acc = findIntersectionsOfStrings(acc, next), strings[0]);
}

export function executeFirstTask(data: string) {
    return splitDataOnGroups(data).reduce((acc, group) =>
        acc += replaceRepeatedChars(group.join("")).length, 0);
}

export function executeSecondTask(data: string) {
   return splitDataOnGroups(data).reduce((acc, group) =>
       acc += findIntersectionsInArray(group).length, 0);

}