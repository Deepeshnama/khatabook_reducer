import React, { useContext } from "react";
import ListItem from "./ListItem";
import TransactionsContext from "../Context/TransactionsContext";

const ListGroup = () => {

    const {transactions} = useContext(TransactionsContext)

    if(transactions.length === 0){
        return (
            <h1 className="display-5 text-center mt-5 text-secondary">No Transactions Yet</h1>
        )
    }

  return (
    <ul className="list-group my-5">
      <h1 className="display-1 text-secondary">All Transactions :</h1>
      {
        transactions.map((transaction) => <ListItem key={transaction.id} transaction = {transaction}/>)
      }
    </ul>
  );
};

export default ListGroup;
