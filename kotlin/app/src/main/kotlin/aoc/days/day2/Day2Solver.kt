package aoc.days.day2

import aoc.common.Problem
import aoc.common.Solver
import aoc.common.readInputLines

sealed interface Command {
    val amount: Int

    data class Forward(override val amount: Int): Command
    data class Down(override val amount: Int): Command
    data class Up(override val amount: Int): Command

    companion object {
        fun fromString(line: String): Command? {
            val tokens = line.split(' ')
            return when (tokens[0]) {
                "forward" -> tokens[1].toIntOrNull()?.let { Forward(it) }
                "down" -> tokens[1].toIntOrNull()?.let { Down(it) }
                "up" -> tokens[1].toIntOrNull()?.let { Up(it) }
                else -> null
            }
        }
    }
}

object Day2Solver : Solver {

    private suspend fun parseCommands(): Sequence<Command> =
        readInputLines(Problem.Day2).mapNotNull { Command.fromString(it) }

    override suspend fun part1(): String {
        var horizontalPos = 0
        var depth = 0

        for (command in parseCommands()) {
            when (command) {
                is Command.Forward -> horizontalPos += command.amount
                is Command.Down -> depth += command.amount
                is Command.Up -> depth -= command.amount
            }
        }

        return "${horizontalPos * depth}"
    }

    override suspend fun part2(): String {
        var aim = 0
        var horizontalPos = 0
        var depth = 0

        for (command in parseCommands()) {
            when (command) {
                is Command.Forward -> {
                    horizontalPos += command.amount
                    depth += aim * command.amount
                }

                is Command.Down -> aim += command.amount
                is Command.Up -> aim -= command.amount
            }
        }

        return "${horizontalPos * depth}"
    }
}