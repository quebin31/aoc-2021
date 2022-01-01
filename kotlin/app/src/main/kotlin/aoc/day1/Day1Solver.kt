package aoc.day1

import aoc.common.Problem
import aoc.common.ProblemSolver
import aoc.common.readInputLines

object Day1Solver : ProblemSolver {

    private suspend fun common(windowSize: Int): String = readInputLines(Problem.Day1)
        .mapNotNull { it.toIntOrNull() } // parse to numbers
        .windowed(windowSize) { it.last() - it.first() } // calculate deltas
        .count { it > 0 } // count positive numbers
        .toString()

    override suspend fun part1(): String = common(windowSize = 2)

    override suspend fun part2(): String = common(windowSize = 4)
}