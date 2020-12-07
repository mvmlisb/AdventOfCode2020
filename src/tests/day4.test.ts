
import "jest";
import {executeFirstTask, executeSecondTask} from "../days/day4";
import fs from "fs";
import {parsePassportData} from "../days/day4";
import {Constants} from "../constants";

const rowData = fs.readFileSync("data/day4.txt","utf8").split(Constants.newline);
const data = parsePassportData(rowData);


test("Day 4: First task", () => {
    expect(executeFirstTask(data)).toBe(230);
});

test("Day 4: Second task", () => {
    expect(executeSecondTask(data)).toBe(156);
});