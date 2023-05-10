import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadTraders } from '../store/trader/trader.action'
import { TraderList } from '../cmps/trader/trader-list'

export function TraderIndex() {
    const traders = useSelector((storeState) => storeState.traderModule.traders)

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