
import "jest";
import {executeFirstTask, executeSecondTask} from "../days/day5";
import fs from "fs";
import {Constants} from "../constants";

const data = fs
    .readFileSync("data/day5.txt","utf8")
    .split(Constants.newline);


test("Day 5: First task", () => {
    expect(executeFirstTask(data)).toBe(944);
});

test("Day 5: Second task", () => {
    expect(executeSecondTask(data)).toBe(554);
});