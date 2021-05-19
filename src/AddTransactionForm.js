import React from 'react';
import './AddTransactionFrom.css';

const AddTransactionForm = () => {
    return (
        <section className=" container py-10">
            <h2 className="secondary-title">Add new transaction</h2>
            <form className="add-transaction-form flex">
                <div className="form-field">
                    <span>Title</span>
                    <input type="text" placeholder="Enter text..."></input>
                </div>
                <div className="form-field">
                    <span>Amount (negative - expense, positive - income)</span>
                    <input type="number" placeholder="Enter amount..."></input>
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

export default AddTransactionForm;
