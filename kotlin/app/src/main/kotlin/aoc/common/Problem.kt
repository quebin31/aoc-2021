package aoc.common

import aoc.days.day1.Day1Solver
import aoc.days.day2.Day2Solver
import aoc.days.day3.Day3Solver

sealed class Problem(val input: String, val name: String, val solver: Solver) {
    object Day1 : Problem(input = "input1.txt", name = "Day 1", solver = Day1Solver)
    object Day2 : Problem(input = "input2.txt", name = "Day 2", solver = Day2Solver)
    object Day3 : Problem(input = "input3.txt", name = "Day 3", solver = Day3Solver)

    companion object {
        fun fromIndex(index: Int): Problem? = Days.getOrNull(index)

        val Days = arrayOf(
            Day1,
            Day2,
            Day3,
        )
    }
}
