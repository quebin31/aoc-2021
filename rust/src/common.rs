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
use lazy_static::lazy_static;

use crate::days::day1::Day1Solver;
use crate::days::day2::Day2Solver;
use crate::solver::Solver;

pub struct Problem {
    pub input: String,
    pub name: String,
    pub solver: Box<dyn Solver + Send + Sync>,
}

impl Problem {
    fn new<S>(input: &str, name: &str, solver: S) -> Self
    where
        S: Solver + Send + Sync + 'static,
    {
        Self {
            input: input.to_string(),
            name: name.to_string(),
            solver: Box::new(solver),
        }
    }

    pub async fn solve(&self) -> Result<()> {
        println!("Part 1 Answer: {}", self.solver.part1().await?);
        println!("Part 2 Answer: {}", self.solver.part2().await?);
        Ok(())
    }
}

lazy_static! {
    pub static ref DAYS: Vec<Problem> = vec![
        Problem::new("input1.txt", "Day 1", Day1Solver),
        Problem::new("input2.txt", "Day 2", Day2Solver),
    ];
}
