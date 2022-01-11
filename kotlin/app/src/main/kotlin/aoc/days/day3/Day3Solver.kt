package aoc.days.day3

import aoc.common.Problem
import aoc.common.Solver
import aoc.common.readInputLines

private fun increaseAccIfBitIsOneAt(position: Int): (acc: Int, s: String) -> Int = { acc, s ->
    acc + if (s[position] == '1') 1 else 0
}

object Day3Solver : Solver {

    override suspend fun part1(): String {
        val lines = readInputLines(Problem.Day3).toList()
        val lineLength = lines.first().length

        var gamRate = 0U
        var epsRate = 0U

        for (bitPos in 0 until lineLength) {
            val oneCount = lines.fold(initial = 0, increaseAccIfBitIsOneAt(bitPos))
            if (oneCount > lines.size / 2) {
                gamRate = gamRate.shl(1).or(1U)
                epsRate = epsRate.shl(1)
            } else {
                gamRate = gamRate.shl(1)
                epsRate = epsRate.shl(1).or(1U)
            }
        }

        return "${gamRate * epsRate}"
    }

    override suspend fun part2(): String {
        fun getRating(rates: MutableList<String>, byMostCommon: Boolean): Int {
            var bitPos = 0

            while (rates.size > 1) {
                val oneCount = rates.fold(initial = 0, increaseAccIfBitIsOneAt(bitPos))
                val moreOnes = oneCount >= rates.size / 2.0
                val selectedBit = if (byMostCommon) {
                    if (moreOnes) '1' else '0'
                } else {
                    if (moreOnes) '0' else '1'
                }

                rates.retainAll { it[bitPos] == selectedBit }
                bitPos += 1
            }

            return rates[0].toInt(radix = 2)
        }

        val lines = readInputLines(Problem.Day3).toList()
        val o2GenRating = getRating(lines.toMutableList(), byMostCommon = true)
        val co2GenRating = getRating(lines.toMutableList(), byMostCommon = false)

        return "${o2GenRating * co2GenRating}"
    }
}