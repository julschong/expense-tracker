import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import './AddTransactionFrom.css';

const AddTransactionForm = ({ transactions, setTransactions }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, onChange] = useState('');
    const [titleError, setTitleError] = useState('OK');
    const [amountError, setAmountError] = useState('OK');
    const [dateError, setDateError] = useState('OK');

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!title || !amount || !date) {
            if (!amount) {
                setAmountError('Please Enter Amount');
            }
            if (!title) {
                setTitleError('Please Enter Title');
            }
            if (!date) {
                setDateError('Please pick a date');
            }
            return;
        }

        const newTransaction = transactions.concat({
            title,
            amount: Number(amount),
            date
        });

        setTransactions(newTransaction);
        localStorage.setItem('transactions', JSON.stringify(newTransaction));
        setTitle('');
        setAmount('');
        onChange(new Date());
        setAmountError('OK');
        setTitleError('OK');
        setDateError('OK');
    };

    return (
        <section className=" container py-10">
            <h2 className="secondary-title">Add new transaction</h2>
            <form onSubmit={onFormSubmit} className="add-transaction-form flex">
                <div className="form-field">
                    <span>Title</span>
                    <input
                        className="field-input"
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
                        className="field-input"
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
                    <span>Date</span>

                    <DatePicker onChange={onChange} value={date} />
                    <div className="error" style={visibility(dateError)}>
                        {dateError}
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
