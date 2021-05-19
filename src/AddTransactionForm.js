import React from 'react';

const AddTransactionForm = () => {
    return (
        <section className="py-10">
            <h2>Add new transaction</h2>
            <form>
                <div>
                    <span>Text</span>
                    <input type="text"></input>
                </div>
                <div>
                    <span>Amount (negative - expense, positive - income)</span>
                    <input type="number"></input>
                </div>
                <div>
                    <input type="submit" value="Add transaction"></input>
                </div>
            </form>
        </section>
    );
};

export default AddTransactionForm;
