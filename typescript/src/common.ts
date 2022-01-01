// Copyright (C) 2021 Kevin Del Castillo Ramírez
// 
// This file is part of AoC-2021.
// 
// AoC-2021 is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// AoC-2021 is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with AoC-2021.  If not, see <http://www.gnu.org/licenses/>.

import { readFile } from "fs/promises";
import * as readline from "readline"
import * as day1 from "./day1.js";
import * as day2 from "./day2.js";
import * as day3 from "./day3.js";

const BaseInputDir = "inputs"

export type Problem = {
    name: string,
    input: string,
    solve: () => Promise<void>,
}

export const Problems: { [_: string]: Problem } = {
    Day1: { name: "Day 1", input: "input1.txt", solve: day1.solve },
    Day2: { name: "Day 2", input: "input2.txt", solve: day2.solve },
    Day3: { name: "Day 3", input: "input3.txt", solve: day3.solve },
}

export async function readInputLines(problem: Problem): Promise<string[]> {
    const path = `${BaseInputDir}/${problem.input}`
    return (await readFile(path)).toString().split('\n')
}

const rl = readline.createInterface(process.stdin, process.stdout)

export async function question(query: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(query, resolve)
    })
}

export function releaseInputControl() {
    rl.close()
}