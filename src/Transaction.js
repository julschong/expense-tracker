import React from 'react';
import { useHover } from './hooks/useHover';

const Transaction = ({ transactions, index, setTransactions }) => {
    const [hoverRef, isHovered] = useHover();
    const transaction = transactions[index];

    const amount = parseFloat(transaction.amount);
    let color = 'bar-grn';
    let sign = '+';
    if (amount < 0) {
        color = 'bar-red';
        sign = '';
    }

    let vis = 'm-fadeOut';

    if (isHovered) {
        vis = 'm-fadeIn';
    }

    const deleteButtonClicked = (e) => {
        const newTrans = transactions
            .slice(0, index)
            .concat(transactions.slice(index + 1));
        localStorage.setItem('transactions', JSON.stringify(newTrans));
        setTransactions(newTrans);
    };

    return (
        <li ref={hoverRef} className={`transaction flex ${color}`}>
            <div>
                <p>{transaction.title}</p>
                <p className="small">May 18th, 2021</p>
            </div>
            <p>
                {sign}
                {transaction.amount.toFixed(2)}
            </p>
            <button onClick={deleteButtonClicked} className={`del-btn ${vis}`}>
                X
            </button>
        </li>
    );
};

export default Transaction;
