import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadTraderTransactions } from '../store/user/user.action'
import { TransactionList } from '../cmps/transactions/transaction-list'

export function AccountIndex() {
    const transactions = useSelector((storeState) => storeState.userModule.transactions)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)
    const [difference, setDifference] = useState(0)
    let holdings = 0
    let initialHoldings = 0

    useEffect(() => {
        loadTraderTransactions(loggedinUser.trader_id)
        calculateHoldings()
        setDifference((loggedinUser.initialMoney + initialHoldings) - (loggedinUser.money + holdings))
    }, [difference])

    function calculateHoldings() {
        loggedinUser.holdings.map(holding => holdings += holding.holdings)
        loggedinUser.initialHoldings.map(initialHolding => initialHoldings += initialHolding.holdings)
    }

    if (!transactions) return
    return (
        <section className='account-index'>
            <h1>My Account</h1>
            <h2 className='difference' >{`You ${difference < 0 ? 'earned' : 'Lost'} $${Math.abs(difference)}`}</h2>
            <h2 className='transactions'>My last transactions</h2>
            <TransactionList transactions={transactions} />
        </section>
    )
}