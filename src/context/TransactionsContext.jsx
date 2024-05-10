import { createContext, useReducer, useState } from "react";
import { TransactionReducer } from "./TransactionReducer";

const TransactionsContext = createContext();

// Transaction Provider

export const TransactionsProvider = ({ children }) => {

  // Global State but in Reducer

  const initialState = {
    transactions : [{id : 1, text : "I am from Reducer" , amount : 1000}] ,
    edit : {
      transaction : {} ,
      isEdit : false ,
    } 
  }

  const [state , dispatch] = useReducer(TransactionReducer , initialState)




  // Delete Transaction

  const deleteTransactions = (id) => {
     dispatch({
      type : "DELETE_TRANSACTION" ,
      payload : id ,
     })
  }

  // Add Transaction

  const addTransaction = (transaction) => {
     dispatch({
      type : "SAVE_TRANSACTION" ,
      payload : transaction ,
     })
  }

  // Edit Transaction

  const editTransactions = (oldTransaction) => {
   
    dispatch({
      type : "EDIT_TRANSACTION",
      payload: oldTransaction ,
  })

  };

  // update Transaction

  const updateTransactions = (updatedTransaction) => {
   dispatch({
    type : "UPDATE_TRANSACTION" ,
    payload : updatedTransaction ,
   })
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions : state.transactions ,
        edit : state.edit,
        deleteTransactions,
        addTransaction,
        editTransactions,
        updateTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContext;
