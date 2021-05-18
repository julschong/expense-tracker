import './App.css';

function App() {
    return (
        <div className="App">
            <header className="container flex">
                <h1>Expense Tracker</h1>
            </header>
            <section className="container flex">
                <h2>Your Balance</h2>
                <p>$</p>
            </section>
            <section className="container showcase flex ">
                <div>
                    <h3>INCOME</h3>
                    <h3>$100</h3>
                </div>
                <div>
                    <h3>EXPENSE</h3>
                    <h3>$100</h3>
                </div>
            </section>
            <section className="container history">
                <h2>History</h2>
                <ul>
                    <li className="flex">
                        <p>name</p>
                        <p>$$$$</p>
                    </li>
                    <li className="flex">
                        <p>name</p>
                        <p>$$$$</p>
                    </li>
                    <li className="flex">
                        <p>name</p>
                        <p>$$$$</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Add new transaction</h2>
                <form>
                    <div>
                        <span>Text</span>
                        <input type="text"></input>
                    </div>
                    <div>
                        <span>
                            Amount (negative - expense, positive - income)
                        </span>
                        <input type="number"></input>
                    </div>
                    <div>
                        <input type="submit" value="Add transaction"></input>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default App;
