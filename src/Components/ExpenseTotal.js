import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-secondary p-4'>
			<span className='budget' >Spent so far: Rs.{total}</span>
		</div>
	);
};

export default ExpenseTotal;