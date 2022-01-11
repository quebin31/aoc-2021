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

import { releaseInputControl, Problems, question, solve } from "./common.js"

let index = 1
console.log('Choose day:')
for (const problem in Problems) {
    console.log(`${index}) ${Problems[problem].name}`)
    index += 1
}

const answer = (await question('>> ')).trim()
const key = `Day${answer}`
const problem = Problems[key]

if (problem === undefined) {
    console.log(`Incorrect day selection: ${answer}`)
} else {
    await solve(problem)
}

releaseInputControl()