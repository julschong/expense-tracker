import React from 'react';
import './Balance.css';

const Balance = ({ transactions }) => {
    const balance = transactions.reduce((sum, el) => sum + el.amount, 0);
    return (
        <section className="balance py-10 container">
            <h2>Your Balance</h2>
            <p>${balance.toFixed(2)}</p>
        </section>
    );
};

export default Balance;
