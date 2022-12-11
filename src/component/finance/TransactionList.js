import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../../config/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
    <div id="finance">
      <h3>Daftar</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      </div>
    </>
  )
}
