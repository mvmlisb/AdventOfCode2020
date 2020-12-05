
import "jest";
import {executeFirstTask, executeSecondTask, parsePasswordData} from "../days/day2";
import fs from "fs";
import {Constants} from "../Constants";

const data = fs
    .readFileSync("data/day2.txt","utf8")
    .split(Constants.newline).map(string => parsePasswordData(string))

test("Day 2: First task", () => {
    expect(executeFirstTask(data)).toBe(607);
});

test("Day 2: Second task", () => {
    expect(executeSecondTask(data)).toBe(321);
});