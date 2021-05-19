import React from 'react';
import './Balance.css';
import { formatNumbers } from './utils/helper';

const Balance = ({ transactions }) => {
    const balance = transactions.reduce((sum, el) => sum + el.amount, 0);
    return (
        <section className="balance py-10 container">
            <h2>Your Balance</h2>
            <p>${formatNumbers(balance)}</p>
        </section>
    );
};

export default Balance;
