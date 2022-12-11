import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../config/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <div id="finance">
        <h3>Tambah transaksi</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Keterangan</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Masukkan keterangan" />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Biaya <br />
              (negatif = pengeluaran, positif = pemasukan dan tanpa titik)</label
            >
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Masukkan jumlah" />
          </div>
          <button className="btn">Tambah</button>
        </form>
      </div>
    </>
  )

};

