import { useSelector } from "react-redux"
import { loadTraderTransactions } from "../store/user/user.action"
import { useEffect, useState } from "react"

export function AccountIndex() {
    const transactions = useSelector((storeState) => storeState.userModule.transactions)
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    useEffect(() => {
        console.log('loggedinUser:', loggedinUser)
        loadTraderTransactions(loggedinUser.trader_id)
    }, []
    )

    return (
        <section className='account-index'>
            <h1>My Account</h1>
        </section>
    )
}