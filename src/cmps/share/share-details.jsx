import { useEffect, useState } from 'react'
import { OpenOrder } from './open-order'
import { LastTransactions } from './last-transactions'
import { shareService } from '../../services/share.service'
import { userService } from '../../services/user.service'

export function ShareDetails({ isModal, setIsModal }) {
    const [share, setShare] = useState({})
    const [isTrade, setIsTrade] = useState(false)
    const [amount, setAmount] = useState('')

    useEffect(() => {
        getShareDetails()
    }, [])

    function onCloseModal() {
        setIsModal(null)
        if (isTrade) setIsTrade(false)
    }

    function backToDetails() {
        setIsTrade(false)
    }

    async function getShareDetails() {
        const currShare = await shareService.get(isModal)
        setShare(currShare)
    }

    async function onTradeShare(isSell) {
        try {
            const trader = userService.getLoggedinUser()
            await shareService.tradeShare(trader.trader_id, share.share_id, +amount, +share.cur_price.toString().substring(0, 7), isSell)
            alert(`Your ${isSell ? 'sell' : 'purchase'} made successfully`)
        }
        catch (err) {
            alert(err)
        }
    }

    async function onSubmitForm(isSell) {
        try {
            await onTradeShare(isSell)
            setIsTrade(false)
            setIsModal(null)
        }
        catch (err) {
            alert(err)
        }
    }

    function handleChange({ target }) {
        const { value } = target
        setAmount(value)
    }

    if (!share) return
    return (
        <section className='share-details' >
            {!isTrade && <div className="details-modal">
                {console.log('share.last_transactions', share.last_transactions)}
                <h2>{share.name}</h2>
                <p>${share.cur_price}</p>
                <h3>Open orders</h3>
                {share.open_orders && <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Price per share</th>
                            <th>Total price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {share.open_orders.map((order, idx) =>
                            <tr key={idx}>
                                <OpenOrder order={order} setIsTrade={setIsTrade} setIsModal={setIsModal} />
                            </tr>
                        )}
                    </tbody>
                </table>}
                {!share.open_orders && <p>No open orders to display</p>}
                
                <h3>Last transactions</h3>
                {share.last_transactions && <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Price per share</th>
                            <th>Total price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {share.last_transactions.map((transaction, idx) =>
                            <tr key={idx}>
                                <LastTransactions transaction={transaction} />
                            </tr>
                        )}
                    </tbody>
                </table>}
                {!share.last_transactions && <p>No transactions to display</p>}
                <button onClick={() => setIsTrade(true)}>Trade</button>
                <button onClick={onCloseModal} title='Close'>Close</button>
            </div>}

            {isTrade && <form className="trade-modal" >
                <h2>{share.name}</h2>
                <p>Please type an amount</p>
                <div>
                    < input type="number"
                        name="amount"
                        value={amount}
                        placeholder="Amount"
                        min="0"
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={() => onSubmitForm(false)}>Buy</button>
                <button type="button" onClick={() => onSubmitForm(true)}>Sell</button>
                <button type="button" onClick={backToDetails}>Back to details</button>
                <button type="button" onClick={onCloseModal}>Close</button>
            </form>}



        </section>
    )
}