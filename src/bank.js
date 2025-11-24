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
// DO NOT REMOVE
module.exports = { BankAccount, Bank };
