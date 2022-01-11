// Copyright (C) 2021 Kevin Del Castillo Ramírez
// 
// This file is part of typescript.
// 
// typescript is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// typescript is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with typescript.  If not, see <http://www.gnu.org/licenses/>.

import { Problems, readInputLines } from "../common.js";

type Instruction = {
    cmd: 'forward' | 'down' | 'up',
    amount: number,
}

async function inputInstructions(): Promise<Array<Instruction>> {
    const lines = await readInputLines(Problems.Day2)
    const instructions = Array<Instruction>()

    for (const line of lines) {
        const tokens = line.split(' ')
        const cmd = tokens[0]

        if (cmd === 'forward' || cmd === 'down' || cmd === 'up') {
            const amount = Number.parseInt(tokens[1])
            instructions.push({ cmd, amount })
        }
    }

    return instructions
}

export const Day2Solver: Solver = {
    part1: async (): Promise<string> => {
        const instructions = await inputInstructions()

        let horizontalPos = 0
        let depth = 0

        for (const instruction of instructions) {
            if (instruction.cmd === 'forward') {
                horizontalPos += instruction.amount
            } else if (instruction.cmd === 'down') {
                depth += instruction.amount
            } else {
                depth -= instruction.amount
            }
        }

        return (horizontalPos * depth).toString()
    },

    part2: async (): Promise<string> => {
        const instructions = await inputInstructions()

        let aim = 0
        let horizontalPos = 0
        let depth = 0

        for (const instruction of instructions) {
            if (instruction.cmd === 'forward') {
                horizontalPos += instruction.amount
                depth += aim * instruction.amount
            } else if (instruction.cmd === 'down') {
                aim += instruction.amount
            } else {
                aim -= instruction.amount
            }
        }

        return (horizontalPos * depth).toString()
    }
}
