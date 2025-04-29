import React, { useEffect, useState } from 'react';
import ExpenseList from '../components/ExpenseList';
import API from '../services/api';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await API.get('/expenses');
      setExpenses(res.data);
    } catch (error) {
      console.error('Failed to fetch expenses:', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleExpenseDeleted = () => {
    fetchExpenses();
  };

  return (
    <div>
      <h1>All Expenses</h1>
      <ExpenseList expenses={expenses} onDelete={handleExpenseDeleted} />
    </div>
  );
};

export default ExpensesPage;
