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

use std::str::FromStr;

use anyhow::{bail, Result};
use async_trait::async_trait;

use crate::input::read_input_lines;
use crate::solver::Solver;
use crate::DAYS;

enum Command {
    Forward(i32),
    Down(i32),
    Up(i32),
}

impl FromStr for Command {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let parts: Vec<_> = s.split(' ').collect();
        let amount: i32 = parts[1].parse()?;
        let cmd = match parts[0] {
            "forward" => Command::Forward(amount),
            "down" => Command::Down(amount),
            "up" => Command::Up(amount),
            invalid => bail!("Not valid command found: {:?}", invalid),
        };

        Ok(cmd)
    }
}

pub struct Day2Solver;

async fn parse_commands() -> Result<Vec<Command>> {
    Ok(read_input_lines(&DAYS[1])
        .await?
        .iter()
        .filter_map(|s| Command::from_str(s).ok())
        .collect())
}

#[async_trait]
impl Solver for Day2Solver {
    async fn part1(&self) -> Result<String> {
        let commands = parse_commands().await?;

        let mut horizontal_pos = 0;
        let mut depth = 0;

        for command in commands {
            match command {
                Command::Forward(amount) => horizontal_pos += amount,
                Command::Down(amount) => depth += amount,
                Command::Up(amount) => depth -= amount,
            }
        }

        Ok((horizontal_pos * depth).to_string())
    }

    async fn part2(&self) -> Result<String> {
        let commands = parse_commands().await?;

        let mut aim = 0;
        let mut horizontal_pos = 0;
        let mut depth = 0;

        for command in commands {
            match command {
                Command::Forward(amount) => {
                    horizontal_pos += amount;
                    depth += aim * amount;
                }

                Command::Down(amount) => aim += amount,
                Command::Up(amount) => aim -= amount,
            }
        }

        Ok((horizontal_pos * depth).to_string())
    }
}
