import React, { useState } from "react";

function AddTransactionForm({onAddTransaction}) {

  const [formData, setFormData] = useState({
      date: "",
      description: "",
      category: "",
      amount: 0
  })
   function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
   }
   function handleSubmit(e){
    e.preventDefault()
    onAddTransaction(formData)
   }

  return (
    <div className="ui segment">
      <form className="ui form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="inline fields">
          <input value={formData.date} type="date" name="date" onChange={handleChange}/>
          <input value={formData.description} type="text" name="description" placeholder="Description" onChange={handleChange}/>
          <input value={formData.category} type="text" name="category" placeholder="Category" onChange={handleChange}/>
          <input value={formData.amount} type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
