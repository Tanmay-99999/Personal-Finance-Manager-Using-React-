// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Income from "./Income";
import Expense from "./Expense";
import Assets from "./Assets";
import Summary from "./Summary";
import Home from "./Home";

import './App.css';

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [assets, setAssets] = useState([]);

  const addIncome = (income) => setIncomes([...incomes, income]);
  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const addAsset = (asset) => setAssets([...assets, asset]);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/income">Income</Link> | 
          <Link to="/expense">Expense</Link> | <Link to="/assets">Assets</Link> | 
          <Link to="/summary">Summary</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/income" element={<Income addIncome={addIncome} />} />
          <Route path="/expense" element={<Expense addExpense={addExpense} />} />
          <Route path="/assets" element={<Assets addAsset={addAsset} />} />
          <Route path="/summary" element={<Summary incomes={incomes} expenses={expenses} assets={assets} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
