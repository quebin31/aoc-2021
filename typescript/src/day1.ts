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

import { Problems, readInputLines } from "./common.js"

async function part1(): Promise<string> {
    const lines = await readInputLines(Problems.Day1)
    const depths = lines.map((num) => Number.parseInt(num))

    const deltas = Array<number>()
    for (let i = 1; i < depths.length; i += 1) {
        deltas.push(depths[i] - depths[i - 1])
    }

    const positiveCount = deltas
        .filter((num) => num > 0)
        .reduce((acc, _) => acc + 1, 0)

    return positiveCount.toString()
}

/**
 * This one is basically a generalization of the first part, changing the 
 * value of windowSize to 1 will yield the same result as part1(). 
 */
async function part2(): Promise<string> {
    const lines = await readInputLines(Problems.Day1)
    const depths = lines.map((num) => Number.parseInt(num))

    const deltas = Array<number>()
    const windowSize = 3
    for (let i = windowSize; i < depths.length; i += 1) {
        deltas.push(depths[i] - depths[i - windowSize])
    }

    const positiveCount = deltas
        .filter((num) => num > 0)
        .reduce((acc, _) => acc + 1, 0)

    return positiveCount.toString()
}

export async function solve() {
    const part1Answer = await part1()
    console.log(`Part 1 Answer: ${part1Answer}`)

    const part2Answer = await part2()
    console.log(`Part 2 Answer: ${part2Answer}`)
}