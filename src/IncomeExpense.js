import React from 'react';
import './IncomeExpense.css';

const IncomeExpense = () => {
    return (
        <section className="py-10 container showcase flex">
            <div className="income-box">
                <h3>INCOME</h3>

                <h3 className="income">$100</h3>
            </div>
            <div>
                <h3>EXPENSE</h3>
                <h3 className="expense">$100</h3>
            </div>
        </section>
    );
};

export default IncomeExpense;
