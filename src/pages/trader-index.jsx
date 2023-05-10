import { useEffect, useState } from 'react'
import { TraderList } from '../cmps/trader/trader-list'
import { loadTraders } from '../store/trader/trader.action'
import { useSelector } from 'react-redux'

export function TraderIndex() {
    let traders = useSelector((storeState) => storeState.traderModule.traders)

    useEffect(() => {
        loadTraders()
    }, []
    )

    return (
        <section className='trader-index'>
            <h1>Traders</h1>
            <TraderList traders={traders} />
        </section>
    )
}