import React from 'react';
import './History.css';
import Transaction from './Transaction';

const Histroy = ({ transactions, setTransactions }) => {
    return (
        <section className="py-10 container history">
            <h2 className="secondary-title">History</h2>
            <ul>
                {transactions.map((tran, i) => (
                    <Transaction
                        key={tran.title + i}
                        transactions={transactions}
                        index={i}
                        setTransactions={setTransactions}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Histroy;
