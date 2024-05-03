import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction])
  }

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  
  return (
    <div>
      <Search transactions={transactions} onSearch={handleSearch}/>
      <AddTransactionForm addTransaction={addTransaction}/>
      <TransactionsList  transactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
