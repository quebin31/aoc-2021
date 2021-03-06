// Copyright (C) 2022 Kevin Del Castillo Ramírez
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

interface Solver {
    part1: () => Promise<string>,
    part2: () => Promise<string>,
}