use std::io::Write;

use anyhow::Result;
use text_io::read;

use crate::common::DAYS;

mod common;
mod day1;
mod input;
mod solver;

#[tokio::main]
async fn main() -> Result<()> {
    println!("Choose a day:");
    for (idx, day) in DAYS.iter().enumerate() {
        println!("{}) {}", idx + 1, day.name);
    }

    print!(">> ");
    std::io::stdout().flush()?;
    let answer: usize = read!();
    if let Some(day) = DAYS.get(answer - 1) {
        day.solve().await?;
    } else {
        println!("Invalid day selection: {}", answer);
    }

    Ok(())
}
