// src/components/Income.js
import React, { useState } from "react";

function Income({ addIncome }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ amount, date, source });
    setAmount("");
    setDate("");
    setSource("");
    alert("Entry added to income"); // Add this line to display the alert message
  };

  return (
    <div>
      <h2>Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="IncomeAmount"
          type="number"
          placeholder="Income Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          className="IncomeDate"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          className="IncomeSource"
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
}

export default Income;