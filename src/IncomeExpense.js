import React from 'react';
import './IncomeExpense.css';

const IncomeExpense = ({ transactions }) => {
    const income = transactions
        .reduce((sum, el) => {
            return el.amount > 0 ? sum + el.amount : sum;
        }, 0)
        .toFixed(2);

    const expense = Math.abs(
        transactions.reduce((sum, el) => {
            return el.amount < 0 ? sum + el.amount : sum;
        }, 0)
    ).toFixed(2);

    return (
        <section className="py-10 container showcase flex">
            <div className="income-box">
                <h3>INCOME</h3>

                <h3 className="income">${income}</h3>
            </div>
            <div>
                <h3>EXPENSE</h3>
                <h3 className="expense">-${expense}</h3>
            </div>
        </section>
    );
};

export default IncomeExpense;
