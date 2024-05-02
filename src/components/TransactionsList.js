import { useEffect, useState } from "react";
import Transaction from "./Transaction";


function TransactionsList() {
  const [transactions, setTransactions] = useState([])
  
  
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Matildakasiva/Phase-2-Code-Challenge---Bank-of-Flatiron/transactions`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setTransactions(data)
    })
    .catch(error => {
      console.error('Error fetching transactions:', error)
    })
  }, [])
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
