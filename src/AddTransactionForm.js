import React, { useState } from 'react';
import './AddTransactionFrom.css';

const AddTransactionForm = ({ transactions, setTransactions }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [titleError, setTitleError] = useState('OK');
    const [amountError, setAmountError] = useState('OK');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!title || !amount) {
            if (!amount) {
                setAmountError('Please Enter Amount');
            }
            if (!title) {
                setTitleError('Please Enter Title');
            }
            return;
        }

        setTransactions(
            transactions.concat({
                title,
                amount: Number(amount)
            })
        );
        localStorage.setItem(
            'transactions',
            JSON.stringify(
                transactions.concat({
                    title,
                    amount: Number(amount)
                })
            )
        );
        setTitle('');
        setAmount('');
        setAmountError('OK');
        setTitleError('OK');
    };

    return (
        <section className=" container py-10">
            <h2 className="secondary-title">Add new transaction</h2>
            <form onSubmit={onFormSubmit} className="add-transaction-form flex">
                <div className="form-field">
                    <span>Title</span>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <div className="error" style={visibility(titleError)}>
                        {titleError}
                    </div>
                </div>
                <div className="form-field">
                    <span>Amount (negative - expense, positive - income)</span>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    ></input>
                    <div className="error" style={visibility(amountError)}>
                        {amountError}
                    </div>
                </div>
                <div className="form-field">
                    <input
                        className="submit"
                        type="submit"
                        value="Add transaction"
                    ></input>
                </div>
            </form>
        </section>
    );
};

const visibility = (status) => {
    if (status === 'OK') {
        return { visibility: 'hidden' };
    }

    return { visibility: 'visible' };
};

export default AddTransactionForm;
