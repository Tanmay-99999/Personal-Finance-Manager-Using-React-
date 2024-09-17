// src/components/Assets.js
import React, { useState } from "react";

function Assets({ addAsset }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAsset({ name, amount, purchaseDate });
    setName("");
    setAmount("");
    setPurchaseDate("");
    alert("Asset Added"); // Add this line to display the alert message
  };

  return (
    <div>
      <h2>Assets</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Asset Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <br/> <br/>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
         <br/> <br/>
        <input
          type="date"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          required
        />
         <br/> <br/>
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
}

export default Assets;