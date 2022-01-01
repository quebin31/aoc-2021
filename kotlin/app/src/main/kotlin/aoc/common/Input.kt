package aoc.common

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.io.File

private const val BaseInputDir = "inputs"

suspend fun readInputLines(problem: Problem): Sequence<String> = withContext(Dispatchers.IO) {
    File("$BaseInputDir/${problem.input}").bufferedReader().lineSequence()
}
