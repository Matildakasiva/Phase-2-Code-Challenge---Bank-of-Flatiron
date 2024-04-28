import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transactions, setTransactions] = useState([])
  const handleAddTransaction = (transaction) => {
    console.log(transaction)
    setTransactions(transactions =>[...transactions, transaction ])
  }

  const [searchTerm, setSearchTerm] = useState("")
  const handleSearch = (value) => {
    setSearchTerm(value)
  }
  
  return (
    <div>
      <Search onSearch={handleSearch}/>
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList  transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
