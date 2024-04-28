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
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  
  const handleSearch = (term) =>{
    setSearchTerm(term)
    setFilteredTransactions(
      transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
      )
    )
  }
  
  return (
    <div>
      <Search onSearch={handleSearch}/>
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList  transactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
