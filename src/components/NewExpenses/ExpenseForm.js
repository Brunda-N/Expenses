import './ExpenseForm.css';
import React,{ useState} from 'react';
const ExpenseForm = (props) =>{
 const[enteredTitle,setEnteredTitle] =useState('');
 const[enteredAmount,setEnteredAmount]=useState('');
 const[enteredDate,setEnteredDate]=useState('');
  const titleChanger=(event)=>{
   setEnteredTitle(event.target.value);
  }
  const AmountChanger=(event)=>{
    setEnteredAmount(event.target.value);
   }
  const DateChanger=(event)=>{
    setEnteredDate(event.target.value);
   }
  const submitHandler=(event) => {
    event.preventDefault();
  
    const expenseData = {
       title:enteredTitle,
       amount:enteredAmount,
       date:new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  
    return (
        <form onSubmit={submitHandler}> 
          <div className="new-expense__controls">
           <div className="new-expense__controls">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChanger}/>
            </div>
            <div className="new-expense__controls">
              <label>Amount</label>
              <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={AmountChanger}/>
            </div>
            <div className="new-expense__controls">
              <label>Date</label>
              <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={DateChanger}/>
            </div>
        </div>
        <div className="new-expense_actions">
          <button type="button" onClick={props.onCancel}>Cancel </button>
          <button type="submit">Add Expenses</button>
        </div>
            
        </form>

    );
}


export default ExpenseForm;