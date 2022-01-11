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

import { Problems, readInputLines } from "../common.js"

function increaseIfBitIsOneAt(pos: number): (acc: number, line: string) => number {
    return (acc, line) => acc + (line[pos] === '1' ? 1 : 0)
}

export const Day3Solver: Solver = {
    part1: async (): Promise<string> => {
        const lines = await readInputLines(Problems.Day3)
        const lineLength = lines[0].length

        let gamRateBinary = ''
        let epsRateBinary = ''
        for (let bitPos = 0; bitPos < lineLength; bitPos += 1) {
            const oneCount = lines.reduce(increaseIfBitIsOneAt(bitPos), 0)

            if (oneCount > lines.length / 2) {
                gamRateBinary += '1'
                epsRateBinary += '0'
            } else {
                gamRateBinary += '0'
                epsRateBinary += '1'
            }
        }

        const gamRate = Number.parseInt(gamRateBinary, 2)
        const epsRate = Number.parseInt(epsRateBinary, 2)

        return (gamRate * epsRate).toString()
    },

    part2: async (): Promise<string> => {
        const lines = await readInputLines(Problems.Day3)

        function getRating(lines: string[], mostCommon: boolean): number {
            let bitPos = 0
            let rates = lines

            while (rates.length > 1) {
                const oneCount = rates.reduce(increaseIfBitIsOneAt(bitPos), 0)
                const moreOnes = oneCount >= rates.length / 2
                const filterBit = mostCommon
                    ? moreOnes ? '1' : '0'
                    : moreOnes ? '0' : '1'

                rates = rates.filter((line) => line[bitPos] === filterBit)
                bitPos += 1
            }

            return Number.parseInt(rates[0], 2)
        }

        const O2GenRating = getRating(lines, true)
        const CO2ScrubRating = getRating(lines, false)
        return (O2GenRating * CO2ScrubRating).toString()
    }
}
