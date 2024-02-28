import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './Context/AppContext';
import Budget from './Components/Budget';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import RemainingBudget from './Components/Reamining';

const App = () => {
	return (
		<div style={{backgroundColor:"white"}}>
		<AppProvider >
			
				<center><h1 >My Monthly Budget Planner</h1>
				<p>It's not just about Spending,It's also about Saving!!!</p></center>
				<Budget/>
				<RemainingBudget/>
				<ExpenseTotal/>
				<h3 >Expense List</h3>
				<ExpenseList/>	
				<h3 >Add Expense</h3>
				<AddExpenseForm/>
				
		</AppProvider>
		</div>
	);
};

export default App;