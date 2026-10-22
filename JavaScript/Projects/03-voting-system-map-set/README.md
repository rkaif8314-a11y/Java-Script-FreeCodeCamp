# FreeCodeCamp JavaScript Project 3: Voting System with Map and Set

A command-line-style voting system that stores options and tracks which voters voted for each option.

## Project files

- `script.js` — voting logic, sample options, test cases, and result display.
- `README.md` — project overview and revision notes.

## Concepts practised

- **Map:** Stores each voting option as a key and its voter Set as the value.
- **Set:** Tracks unique voter IDs for an option and prevents duplicate votes for that same option.
- **Functions:** `addOption()`, `vote()`, and `displayResults()` separate the main tasks.
- **Validation:** `trim()` checks for an empty option containing only whitespace.
- **Map methods:** `has()`, `set()), and `get()` check, add, and retrieve options.
- **Set methods and properties:** `has()`, `add()`, and `size` check voters, record votes, and count votes.
- **Iteration:** `for...of` loops through the Map entries to build the results.
- **Template literals:** Build readable confirmation and error messages.

## How it works

1. A new Map is created to hold all voting options.
2. `addOption(option)` validates the name, rejects duplicates, and creates an empty Set for a new option.
3. `vote(option, voterId)` checks that the option exists and rejects a voter who has already voted for that option.
4. `displayResults()` counts each option's voters using the Set's `size` property.
5. The final section tests successful votes, duplicate options, duplicate votes, and attempts to vote for a missing option.

## Important behaviour

A voter can vote once **per option** in this implementation. The same voter ID can vote for different options because each option has its own Set. This is a learning exercise, not a secure real-world voting system.

## Run locally

Run `script.js` with Node.js, or include it in an HTML page and open the browser console to inspect the output.
