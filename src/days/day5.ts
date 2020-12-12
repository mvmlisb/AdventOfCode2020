class SeatInfo {
    row: number;
    column: number;
    id: number;

    constructor(string: string) {
        const binary = string.split("").reduce((acc, cur) => acc += cur === "F" || cur === "L" ? "0" : "1", "");
        const radix = 2;
        this.row = parseInt(binary.substring(0, 7), radix);
        this.column = parseInt(binary.substring(7, 10), radix);
        this.id = this.row * 8 + this.column;
    }
}

function parseSeatIds(data: string[]) {
    return data.map(string => new SeatInfo(string).id)
}

export function executeFirstTask(data: string[]) {
    return Math.max(...parseSeatIds(data));
}

export function executeSecondTask(data: string[]) {
    const ids = parseSeatIds(data);

    ids.sort((a, b) => a - b);

    for (let i = 0; i < ids.length - 1; i++) {
        const current = ids[i];
        const next = ids[i + 1];

        if (next - current > 1)
            return current + 1;
    }

    return -1;

}