// src/components/Expense.js
import React, { useState } from "react";

function Expense({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, date, reason });
    setAmount("");
    setDate("");
    setReason("");
    alert("Entry added to Expense"); // Add this line to display the alert message
  };

  return (
    <div>
      <h2>Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Spent Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
         <br/> <br/>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
         <br/> <br/>
        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
         <br/> <br/>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default Expense;