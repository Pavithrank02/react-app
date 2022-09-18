import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expneses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expneses[0].title} 
      amount={expneses[0].amount} 
      date={expneses[0].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expneses[1].title} 
      amount={expneses[1].amount} 
      date={expneses[1].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expneses[2].title} 
      amount={expneses[2].amount} 
      date={expneses[2].date}>      
      </ExpenseItem>
      <ExpenseItem
      title={expneses[3].title} 
      amount={expneses[3].amount} 
      date={expneses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
