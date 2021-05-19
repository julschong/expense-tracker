import React from 'react';
import './History.css';
import Transaction from './Transaction';

const Histroy = () => {
    return (
        <section className="py-10 container history">
            <h2 className="secondary-title">History</h2>
            <ul>
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </ul>
        </section>
    );
};

export default Histroy;
