import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import API from './services/api';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await API.get('/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleExpenseAdded = () => {
    fetchExpenses();
  };

  return (
    <div>
      <ExpenseForm onExpenseAdded={handleExpenseAdded} />
      <ExpenseList expenses={expenses} onDelete={handleExpenseAdded} />
    </div>
  );
};

export default Home;
