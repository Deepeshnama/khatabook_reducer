import React, { useContext, useEffect, useState } from "react";
import TransactionsContext from "../Context/TransactionsContext";

const Form = () => {
  const { addTransaction, edit, updateTransactions } =
    useContext(TransactionsContext);

  const [text, setText] = useState("");

  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTransactions({
          id: edit.transaction.id,
          text,
          amount: parseInt(amount),
        })
      : addTransaction({
          id: crypto.randomUUID(),
          text: text,
          amount: parseInt(amount),
        });

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="card rounded-0 p-3">
      <h1 className="display-3 text-center">Enter Your Transactions Details</h1>
      <form className="my-3" onSubmit={(e) => handleSubmit(e)}>

        {/* <span className="my-3">
        <button className="btn btn-sm rounded-0 bg-primary mx-2">Income</button>
        <button className="btn btn-sm rounded-0 bg-info">Expense</button>
        </span> */}

        <input
          type="text"
          placeholder=" Please Enter Transaction"
          className="form-control rounded-0 my-2"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control rounded-0 my-3"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <button className="btn btn-success rounded-0 w-100">Save</button>
      </form>
    </div>
  );
};

export default Form;
