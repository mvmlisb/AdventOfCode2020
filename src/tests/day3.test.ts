
import "jest";
import {executeFirstTask} from "../days/day3";
import fs from "fs";
import {Constants} from "../Constants";

const data = fs
    .readFileSync("data/day3.txt","utf8")
    .split(Constants.newline)

test("Day 3: First task", () => {
    expect(executeFirstTask(data)).toBe(607);
});

// test("Day 3: Second task", () => {
//     expect(executeSecondTask(data)).toBe(321);
// });