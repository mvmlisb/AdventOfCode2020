
import "jest";
import {executeFirstTask, executeSecondTask} from "../days/day1";
import fs from "fs";
import {Constants} from "../Constants";

const numbers = fs
    .readFileSync("data/day1.txt","utf8")
    .split(Constants.newline)
    .map(string => parseInt(string))

test("Day 4: First task", () => {
    expect(executeFirstTask(numbers)).toBe(436404);
});

test("Day 4: Second task", () => {
    expect(executeSecondTask(numbers)).toBe(274879808);
});