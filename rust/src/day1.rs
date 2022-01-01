// Copyright (C) 2022 Kevin Del Castillo Ramírez
//
// This file is part of rust.
//
// rust is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// rust is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with rust.  If not, see <http://www.gnu.org/licenses/>.

use anyhow::Result;
use async_trait::async_trait;

use crate::common::DAYS;
use crate::input::read_input_lines;
use crate::solver::Solver;

pub struct Day1Solver;

fn common_solution(lines: &[String], window_size: usize) -> usize {
    lines
        .iter()
        .filter_map(|s| s.parse::<isize>().ok())
        .collect::<Vec<_>>()
        .windows(window_size)
        .map(|w| w.last().unwrap() - w.first().unwrap())
        .filter(|d| d.is_positive())
        .count()
}

#[async_trait]
impl Solver for Day1Solver {
    async fn part1(&self) -> Result<String> {
        let lines = read_input_lines(&DAYS[0]).await?;
        Ok(common_solution(&lines, 2).to_string())
    }

    async fn part2(&self) -> Result<String> {
        let lines = read_input_lines(&DAYS[0]).await?;
        Ok(common_solution(&lines, 4).to_string())
    }
}
