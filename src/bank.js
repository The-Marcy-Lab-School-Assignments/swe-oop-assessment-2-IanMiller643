class BankAccount {
  #balance = 0;

  static #totalNumberOfAccounts = 0;

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('Withdrawal failed. Insufficient funds.');
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];

  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      total += account.balance;
    });
    return total;
  }

  findAccount(accountNumber) {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }
}

// TEST YOUR CODE HERE
// Create a Bank instance
const myBank = new Bank("First National");
console.log(myBank); // Bank { name: "First National" }

// Create BankAccount instances
const account1 = new BankAccount("001", "Alice");
const account2 = new BankAccount("002", "Bob");
console.log(account1); // BankAccount { accountNumber: "001", ownerName: "Alice" }
console.log(account2); // BankAccount { accountNumber: "002", ownerName: "Bob" }

// Add accounts to the bank
myBank.addAccount(account1);
myBank.addAccount(account2);
console.log(myBank.accounts);
/* 
[
  BankAccount { accountNumber: "001", ownerName: "Alice" },
  BankAccount { accountNumber: "002", ownerName: "Bob" }
]
*/

// Perform deposits and withdrawals
// DO NOT REMOVE
module.exports = { BankAccount, Bank };
