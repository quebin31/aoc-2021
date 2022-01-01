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

use std::path::Path;

use anyhow::Result;
use tokio::fs::File;
use tokio::io::AsyncReadExt;

use crate::common::Problem;

static BASE_INPUT_DIR: &str = "inputs";

pub async fn read_input_lines(problem: &Problem) -> Result<Vec<String>> {
    let path = Path::new(BASE_INPUT_DIR).join(&problem.input);
    let mut file = File::open(path).await?;

    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;

    Ok(contents.split('\n').map(|s| s.to_string()).collect())
}
