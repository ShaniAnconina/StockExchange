import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadTraderTransactions } from '../store/user/user.action'

export function AccountIndex() {
    const transactions = useSelector((storeState) => storeState.userModule.transactions)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    useEffect(() => {
        loadTraderTransactions(loggedinUser.trader_id)
        console.log('transactions:', transactions)
    }, []
    )

    return (
        <section className='account-index'>
            <h1>My Account</h1>

        </section>
    )
}