import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const handleAddTransaction = (transaction) => {
    console.log(transaction)
    setTransactions(prevTransactions =>[...prevTransactions, transactions ])
  }

  const handleSearch = (searchTerm) => {
    transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }
  
  
  return (
    <div>
      <Search transactions={transactions} onSearch={handleSearch}/>
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList  transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
