package aoc.common

interface ProblemSolver {
    suspend fun part1(): String
    suspend fun part2(): String

    suspend fun solve() {
        println("Part 1 Answer: ${part1()}")
        println("Part 2 Answer: ${part2()}")
    }
}