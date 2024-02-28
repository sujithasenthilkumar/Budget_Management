import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType}`}>
			<span className='budget'>Remaining: Rs.{budget - totalExpenses}</span>
		</div>
	);
};

export default RemainingBudget;