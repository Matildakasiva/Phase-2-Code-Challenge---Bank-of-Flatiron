import React from "react";

function Transaction({ transaction }) {
  return (
    <tr>
      <td>{transaction.data}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;