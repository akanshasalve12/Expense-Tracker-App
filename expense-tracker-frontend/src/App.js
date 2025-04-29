import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import AddExpensePage from './pages/AddExpensePage';
import ExpenseDashboard from './components/ExpenseDashboard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link to="/add-expense">Add Expense</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/add-expense" element={<AddExpensePage />} />
        <Route path="/dashboard" element={<ExpenseDashboard />} />
        <Route path="/expense-form" element={<ExpenseForm />} />
        <Route path="/expense-list" element={<ExpenseList />} />
      </Routes>
    </Router>
  );
}

export default App;
