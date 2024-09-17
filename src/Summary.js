// src/components/Summary.js
import React, { useEffect, useState } from "react";

function Summary({ incomes, expenses, assets }) {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const incomeSum = incomes.reduce((acc, income) => acc + parseFloat(income.amount), 0);
    setTotalIncome(incomeSum);
  }, [incomes]);

  useEffect(() => {
    const expenseSum = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    setTotalExpense(expenseSum);
  }, [expenses]);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expense: ${totalExpense}</p>
      <p>Net Savings: ${totalIncome - totalExpense}</p>
      <h3>Assets:</h3>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            {asset.name}: ${asset.amount} (Purchased on {asset.purchaseDate})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;
