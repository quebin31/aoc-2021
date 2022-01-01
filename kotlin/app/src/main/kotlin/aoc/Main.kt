package aoc

import aoc.common.Days
import aoc.common.Problem

suspend fun main() {
    println("Choose a day:")
    for ((idx, problem) in Days.withIndex()) {
        println("${idx + 1}) ${problem.name}")
    }

    print(">> ")
    val answer = readLine().orEmpty().toIntOrNull()
    val problem = answer?.let { Problem.fromIndex(index = it - 1) }

    if (problem == null) {
        println("Invalid day selection: $answer")
    } else {
        problem.solver.solve()
    }
}
