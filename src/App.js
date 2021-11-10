import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount:302.67, date: new Date(2021, 4, 28)},
    {title: 'Bike Insurance', amount:111.08, date: new Date(2021, 3, 12)},
    {title: 'Health Insurance', amount:30.61, date: new Date(2021, 4, 7)},
    {title: 'Home Insurance', amount:3024.64, date: new Date(2021, 5, 20)},
    {title: 'Travel Insurance', amount:88.91, date: new Date(2021, 1, 18)},
  ]
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Lets get started</h2>
      <ExpenseItem 
        title = {expenses[0].title} 
        amount = {expenses[0].amount} 
        date = {expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title = {expenses[1].title} 
        amount = {expenses[1].amount} 
        date = {expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title = {expenses[2].title} 
        amount = {expenses[2].amount} 
        date = {expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title = {expenses[3].title} 
        amount = {expenses[3].amount} 
        date = {expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title = {expenses[4].title} 
        amount = {expenses[4].amount} 
        date = {expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
