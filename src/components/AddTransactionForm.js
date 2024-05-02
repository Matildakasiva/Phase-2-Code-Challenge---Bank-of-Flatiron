import React, { useState } from "react";

function AddTransactionForm({onAddTransaction}) {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')


  const newDate = (e) => {
    setDate(e.target.value)
  }
   const newDescription = (e) => {
    setDescription(e.target.value)
   }
   const newCategory = (e) => {
    setCategory(e.target.value)
   }
   const newAmount = (e) => {
    setAmount(e.target.value)
   }

   function handleSubmit(e){
    e.preventDefault()
    const newTransactions = {
      date,
      description,
      category,
      amount
   }
    onAddTransaction(newTransactions)
      setDate('')
      setDescription('')
      setCategory('')
      setAmount('')
   }

  return (
    <div className="ui segment">
      <form className="ui form"  onSubmit={handleSubmit}>
        <div className="inline fields">
          <input value={date} type="date" name="date" onChange={newDate}/>
          <input value={description} type="text" name="description" placeholder="Description" onChange={newDescription}/>
          <input value={category} type="text" name="category" placeholder="Category" onChange={newCategory}/>
          <input value={amount} type="number" name="amount" placeholder="Amount" step="0.01" onChange={newAmount}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
