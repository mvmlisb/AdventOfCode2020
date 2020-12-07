interface Slope {
    x: number;
    y: number;
}

function getTreesCount(lines: string[], slope: Slope) {
    let count = 0;
    let x = 0;
    let y = 0;

    while (y < lines.length) {
        if (lines[y][x] === "#")
            count++;

        x = (x + slope.x) % lines[y].length;
        y += slope.y;
    }

    return count;
}

export function executeFirstTask(lines: string[]){
    return getTreesCount(lines, {x: 3, y: 1});
}

export function executeSecondTask(lines: string[]){
    let result = getTreesCount(lines, {x: 1, y:1});

    const restSlopes= [{x: 3, y:1}, {x: 5, y:1}, {x: 7, y:1}, {x: 1, y:2}] as Slope[];
    restSlopes.forEach(slope => result *= getTreesCount(lines, slope));

    return result;
}