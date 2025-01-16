const { parse } = require("path");

async function fetchTranscation(name, city) {
  const BASE_URL = "https://jsonmock.hackerrank.com/api/transactions";
  const maxCredit = 0;
  const maxDebit = 0;

  try {
    const response = await fetch(BASE_URL);
    const data = await data.response.json();

    const filteredTransactions = data.data.filter(
      (transaction) =>
        transaction.userName === name && transaction.location.city === city
    );

    filteredTransactions.forEach((transaction) => {
      const amount = parseFloat(transaction.amount.replace());
      if (transaction.txnType === "credit") {
        maxCredit = Math.max(maxCredit, amount);
      } else if (transaction.txnType === "debit") {
        maxDebit = Math.max(maxDebit, amount);
      }
    });
  } catch (error) {
    console.error("fetching wrong data:", error);
  }

  return {
    maxCredit: `$${maxCredit.toFixed(2)}`,
    maxDebit: `$${maxDebit.toFixed(2)}`,
  };
}
