"use strict";

async function maximumTransferT(name: string, city: string): Promise<string[]> {
  const BASE_URL = "https://jsonmock.hackerrank.com/api/transactions";
  let maxCredit = 0;
  let maxDebit = 0;

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    const filteredTransactions = data.data.filter(
      (transaction: any) =>
        transaction.userName === name && transaction.location.city === city
    );

    filteredTransactions.forEach((transaction: any) => {
      const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, "")); // Convert to float
      if (transaction.txnType === "credit") {
        maxCredit = Math.max(maxCredit, amount);
      } else if (transaction.txnType === "debit") {
        maxDebit = Math.max(maxDebit, amount);
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return [`$${maxCredit.toFixed(2)}`, `$${maxDebit.toFixed(2)}`];
}
