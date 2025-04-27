import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components or pages
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import AddExpensePage from './pages/AddExpensePage';

function App() {
  return (
    <Router>
      <div>
        {/* You can add navigation links here if needed */}
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/expenses">Expenses</a></li>
            <li><a href="/add-expense">Add Expense</a></li>
          </ul>
        </nav>

        {/* Define routes here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/add-expense" element={<AddExpensePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
