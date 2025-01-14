"use strict";

async function maximumTransfer(name, city) {
  const BASE_URL = "https://jsonmock.hackerrank.com/api/transactions";

  let maxCredit = 0;
  let maxDebit = 0;

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const filteredTransactions = mockData.data.filter(
      (transaction) =>
        transaction.userName === name && transaction.location.city === city
    );

    // Find the maximum credit and debit amounts
    filteredTransactions.forEach((transaction) => {
      const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, "")); // Convert amount to float
      if (transaction.txnType === "credit") {
        maxCredit = Math.max(maxCredit, amount);
      } else if (transaction.txnType === "debit") {
        maxDebit = Math.max(maxDebit, amount);
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Return results in currency format
  return [`$${maxCredit.toFixed(2)}`, `$${maxDebit.toFixed(2)}`];
}
