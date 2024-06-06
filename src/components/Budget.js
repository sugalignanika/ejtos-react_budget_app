import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(value),
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency[0]}{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                style={{ marginLeft: '10px' }}
                className="form-control"
            />
        </div>
    );
};

export default Budget;
