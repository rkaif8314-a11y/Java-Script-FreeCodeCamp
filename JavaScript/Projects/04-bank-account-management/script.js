/*
  BANK ACCOUNT MANAGEMENT PROGRAM

  This class manages a bank account.
  It supports deposits, withdrawals, balance checking,
  and displaying transaction history.
*/


// STEP 1: DEFINE THE BANK ACCOUNT CLASS
class BankAccount {

  // The constructor initializes a new bank account.
  constructor() {

    // Set the initial account balance to zero.
    this.balance = 0;

    // Create an empty array to store transaction objects.
    this.transactions = [];
  }


  // STEP 2: DEFINE THE DEPOSIT METHOD
  // This method accepts the amount of money to deposit.
  deposit(amount) {

    // Reject deposits that are zero or negative.
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    // Add the deposit amount to the current balance.
    this.balance += amount;

    // Record the successful deposit in the transaction history.
    this.transactions.push({
      type: "deposit", // Identify this transaction as a deposit.
      amount: amount   // Store the amount deposited.
    });

    // Return a message containing the deposit and new balance.
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }


  // STEP 3: DEFINE THE WITHDRAW METHOD
  // This method accepts the amount of money to withdraw.
  withdraw(amount) {

    // Reject non-positive amounts or withdrawals exceeding the balance.
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    // Subtract the withdrawal amount from the current balance.
    this.balance -= amount;

    // Record the successful withdrawal in the transaction history.
    this.transactions.push({
      type: "withdraw", // Identify this transaction as a withdrawal.
      amount: amount    // Store the amount withdrawn.
    });

    // Return a message containing the withdrawal and new balance.
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }


  // STEP 4: DEFINE THE BALANCE-CHECKING METHOD
  checkBalance() {

    // Return the current balance in the required format.
    return `Current balance: $${this.balance}`;
  }


  // STEP 5: LIST ALL DEPOSITS
  listAllDeposits() {

    // Filter the transaction array to keep only deposits.
    const deposits = this.transactions.filter(
      transaction => transaction.type === "deposit"
    );

    // Extract the amount from each deposit transaction.
    const amounts = deposits.map(
      transaction => transaction.amount
    );

    // Join the amounts with commas and return the result.
    return `Deposits: ${amounts.join(",")}`;
  }


  // STEP 6: LIST ALL WITHDRAWALS
  listAllWithdrawals() {

    // Filter the transaction array to keep only withdrawals.
    const withdrawals = this.transactions.filter(
      transaction => transaction.type === "withdraw"
    );

    // Extract the amount from each withdrawal transaction.
    const amounts = withdrawals.map(
      transaction => transaction.amount
    );

    // Join the amounts with commas and return the result.
    return `Withdrawals: ${amounts.join(",")}`;
  }
}


// STEP 7: CREATE THE REQUIRED ACCOUNT

// Create a new bank account named myAccount.
// Its initial balance is zero and its transaction array is empty.
const myAccount = new BankAccount();


// STEP 8: TEST THE INITIAL ACCOUNT STATE

// Display the initial balance.
console.log(myAccount.balance);

// Display the initially empty transaction array.
console.log(myAccount.transactions);


// STEP 9: TEST DEPOSITS

// Deposit $100 and display the success message.
console.log(myAccount.deposit(100));

// Display the updated balance.
console.log(myAccount.balance);

// Try to deposit a negative amount.
// The method should reject this transaction.
console.log(myAccount.deposit(-50));

// Display the transaction history to verify that
// the rejected deposit was not recorded.
console.log(myAccount.transactions);


// STEP 10: TEST WITHDRAWALS

// Withdraw $40 from the current balance.
console.log(myAccount.withdraw(40));

// Try to withdraw zero dollars.
// The method should reject this transaction.
console.log(myAccount.withdraw(0));


// STEP 11: ADD MORE SUCCESSFUL TRANSACTIONS

// Make three additional deposits.
myAccount.deposit(200);
myAccount.deposit(100);
myAccount.deposit(50);

// Make two additional withdrawals.
myAccount.withdraw(40);
myAccount.withdraw(30);


// STEP 12: DISPLAY THE FINAL ACCOUNT INFORMATION

// Display the final account balance.
console.log(myAccount.checkBalance());

// Display all successful deposit amounts.
console.log(myAccount.listAllDeposits());

// Display all successful withdrawal amounts.
console.log(myAccount.listAllWithdrawals());

// Display every successful transaction object.
console.log(myAccount.transactions);
