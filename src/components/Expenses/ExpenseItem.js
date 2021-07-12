import React, { useState } from 'react'
import ExpenseDate from  './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title);

    const ClickHandler=()=>{
        setTitle("Brunda");
        console.log(title);
    }

    return (
    <li>
    <Card className="expense-item">
       <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h1>{title}</h1>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={ClickHandler}>Change Title</button>
    </Card>
    </li>);
}
export default ExpenseItem;