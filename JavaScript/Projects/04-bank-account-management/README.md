# FreeCodeCamp JavaScript Project 4: Bank Account Management

A JavaScript class-based bank account simulation. It supports deposits, withdrawals, balance checking, and viewing successful transaction history.

## Project files

- `script.js` — the `BankAccount` class and example transactions.
- `README.md` — project overview and revision notes.

## Features

- Starts each new account with a zero balance.
- Accepts deposits greater than zero.
- Rejects withdrawals that are non-positive or exceed the current balance.
- Records successful transactions as objects in an array.
- Lists deposit and withdrawal amounts separately.
- Displays the current balance and complete transaction history.

## JavaScript concepts practised

- **Classes and objects:** `BankAccount` defines the structure and behaviour of an account; `new BankAccount()` creates an instance.
- **Constructor:** Initializes the balance and transaction array.
- **Methods and `this`:** Methods update or read the current account's properties through `this.balance` and `this.transactions`.
- **Validation and early returns:** Invalid deposits and withdrawals are rejected before state changes are made.
- **Arrays and objects:** Each successful transaction is stored as an object with a `type` and `amount`.
- **`push()`:** Adds a transaction object to the history.
- **`filter()`:** Selects deposits or withdrawals.
- **`map()`:** Extracts transaction amounts.
- **`join()`:** Formats amounts into a comma-separated string.
- **Template literals:** Build readable transaction messages.

## How it works

1. A `BankAccount` instance starts with balance `0` and an empty transaction array.
2. `deposit(amount)` validates the amount, increases the balance, and records a deposit.
3. `withdraw(amount)` validates the amount and available balance, decreases the balance, and records a withdrawal.
4. `checkBalance()` returns the current balance as a formatted string.
5. `listAllDeposits()` and `listAllWithdrawals()` filter the history and format the corresponding amounts.
6. The final section runs example transactions and prints the results.

## Expected final state for the supplied test sequence

- **Final balance:** $340
- **Deposits:** 100, 200, 100, 50
- **Withdrawals:** 40, 40, 30

The rejected deposit of -$50 and rejected withdrawal of $0 do not change the balance or get added to the transaction history.

## Run locally

Run `script.js` with Node.js, or include it in an HTML page and inspect the output in the browser console.

## Revision note

This is an educational simulation, not a real banking system. For real financial software, money handling, authentication, persistence, concurrency, and audit requirements need much stronger protections.
