import AddTransactionForm from './AddTransactionForm';
import './App.css';
import Balance from './Balance';
import Header from './Header';
import Histroy from './Histroy';
import IncomeExpense from './IncomeExpense';

function App() {
    return (
        <div className="App">
            <Header />
            <Balance />
            <IncomeExpense />
            <Histroy />
            <AddTransactionForm />
        </div>
    );
}

export default App;
