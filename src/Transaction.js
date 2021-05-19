import React from 'react';
import { useHover } from './hooks/useHover';
import { formatNumbers } from './utils/helper';

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
                {transaction.title.length < 15 ? (
                    <p>{transaction.title}</p>
                ) : (
                    <p>{`${transaction.title.substring(0, 15)}...`}</p>
                )}
                <p className="small">{formatDate(transaction.date)}</p>
            </div>
            <p>
                {sign}
                {formatNumbers(transaction.amount)}
            </p>
            <button onClick={deleteButtonClicked} className={`del-btn ${vis}`}>
                X
            </button>
        </li>
    );
};

const formatDate = (date) => {
    return new Date(date).toDateString();
};

export default Transaction;
