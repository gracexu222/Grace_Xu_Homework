"use strict";

async function maximumTransfer(name, city) {
  const baseUrl = "https://jsonmock.hackerrank.com/api/transactions";
  let maxAmount = 0;
  let result = [];

  async function fetchPage(page) {
    const response = await fetch(`${baseUrl}?page=${page}`);
    const data = await response.json();
    return data;
  }

  let page = 1;
  let totalPages = 1;

  // Loop through all pages
  while (page <= totalPages) {
    const data = await fetchPage(page);
    totalPages = data.total_pages;

    data.data.forEach((transaction) => {
      if (
        transaction.userName === name &&
        transaction.location.address.city === city &&
        transaction.txnType === "debit"
      ) {
        // Convert the amount string to a numeric value
        const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ""));
        if (amount > maxAmount) {
          maxAmount = amount;
          result = [transaction.id];
        } else if (amount === maxAmount) {
          result.push(transaction.id);
        }
      }
    });

    page++;
  }

  return result;
}
