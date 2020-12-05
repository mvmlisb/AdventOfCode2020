

export function executeFirstTask(lines: string[]){
    let count = 0;
    lines.forEach(line => {
        count += countTreesInLine(line)
    })
    return count;
}

function countTreesInLine(line: String) {
    return line.split("", 3)
        .filter(char => char === "#")
        .length;
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




