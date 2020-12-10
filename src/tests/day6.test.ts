
import "jest";
import {executeFirstTask, executeSecondTask} from "../days/day6";
import fs from "fs";

const data = fs.readFileSync("data/day6.txt","utf8")


test("Day 6: First task", () => {
    expect(executeFirstTask(data)).toBe(6530);
});

test("Day 6: Second task", () => {
    expect(executeSecondTask(data)).toBe(3635);
});