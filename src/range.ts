export interface Range {
    start: number;
    end: number;
}

export function parseRange(range: string): Range {
    const splitted = range.split("-");

    if (splitted.length !== 2)
        throw new Error("Invalid range");

    return {start: parseInt(splitted[0]), end: parseInt(splitted[1])} as Range;
}

export function inRange(value: number, range: Range) {
    return value >= range.start && value <= range.end;
}