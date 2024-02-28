import React from 'react';
import './Style.Module.css'
const ViewBudget = (props) => {
	return (
		<>
			<span className='budget'>Salary: Rs.{props.budget}</span>
			<button type='button' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;