import React, { useContext } from 'react'
import TransactionsContext from '../Context/TransactionsContext';

const BalanceSection = () => {

    const {transactions} = useContext(TransactionsContext)

    const balance = transactions.reduce((p,c) => p+c.amount , 0);

    const income = transactions.filter((item) => item.amount > 0).reduce((p,c) => p+c.amount , 0);

    const expense = transactions.filter((item) => item.amount < 0).reduce((p,c) => p+c.amount , 0);


  return (
    <div className="row my-3 g-3">

          <div className="col-md-12 col-lg-4">
            <div className="card p-3 rounded-0 bg-primary">
              <h1 className="display-6 text-light">
                Total Income :
              </h1>

              <h1 className="display-5 text-light">
                {income}
              </h1>

            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card p-3 rounded-0 bg-info">
              <h1 className="display-5 text-light">
               Total Expense :
              </h1>

              <h1 className="display-6 text-light">
               {expense}
              </h1>

            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card p-3 rounded-0 bg-warning">
              <h1 className="display-5 text-light">
               Total Balance :
              </h1>

              <h1 className="display-6 text-light">
               {balance}
              </h1>

            </div>
          </div>

        </div>
  )
}

export default BalanceSection;




