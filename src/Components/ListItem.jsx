import React, { useContext, useEffect, useState } from "react";
import TransactionsContext from "../Context/TransactionsContext";

const ListItem = ({transaction}) => {

    const {deleteTransactions , editTransactions} = useContext(TransactionsContext)

  return (
    <>
      <li className = { transaction.amount > 0 ? "list-group-item rounded-0 bg-success" : "list-group-item rounded-0 bg-danger"}>
        <h1 className = "text-light display-6">
          {""}
           {transaction.text} : {transaction.amount}
        </h1>
        <span className = "float-end">
          <button className="btn btn-sm btn-outline-warning rounded-0 mx-2" onClick={() => editTransactions(transaction)} >
            Edit
          </button>
          <button className = "btn btn-sm btn-outline-info rounded-0" onClick={() => deleteTransactions(transaction.id)} >
            Delete
          </button>
        </span>
      </li>
    </>
  );
};

export default ListItem;
