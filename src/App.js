import { useEffect, useState } from 'react';
import AddTransactionForm from './AddTransactionForm';
import './App.css';
import Balance from './Balance';
import Header from './Header';
import Histroy from './Histroy';
import IncomeExpense from './IncomeExpense';

function App() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('transactions')) {
            const transactions = JSON.parse(
                localStorage.getItem('transactions')
            );
            setTransactions(transactions);
        }
    }, []);
    return (
        <div className="App">
            <div>
                <Header />
                <Balance transactions={transactions} />
                <IncomeExpense transactions={transactions} />
                <AddTransactionForm
                    transactions={transactions}
                    setTransactions={setTransactions}
                />
            </div>

            <Histroy
                transactions={transactions}
                setTransactions={setTransactions}
            />
        </div>
    );
}

export default App;
