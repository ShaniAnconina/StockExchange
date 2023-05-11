import { useEffect, useState } from "react"
import { shareService } from "../../services/share.service"
import { OpenOrder } from "./open-order"
import { userService } from "../../services/user.service"

export function ShareDetails({ isModal, setIsModal }) {
    const [share, setShare] = useState({})

    useEffect(() => {
        getShareDetails()
    }, [])

    function onCloseModal() {
        setIsModal(null)
    }

    async function getShareDetails() {
        const currShare = await shareService.get(isModal)
        setShare(currShare)
    }

    function onTradeShare(share_id = share.share_id) {
        // const share = shareService.get(share_id)
        // console.log('share:', share)
        // const trader = userService.getLoggedinUser()
        // shareService.buyShare({ trader: trader.trader_id, share_id, amount:, price_per_share, is_sell })
    }

    if (!share) return
    return (
        <section className='share-details' >
            <h2>{share.name}</h2>
            <p>${share.cur_price}</p>
            <h3>Open orders</h3>
            {share.open_orders && <table>
                <thead>
                    <tr>
                        <th>Share</th>
                        <th>Amount</th>
                        <th>Price per share</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tbody>
                    {share.open_orders.map(order =>
                        <tr key={order.share_id}>
                            <OpenOrder order={order} />
                        </tr>
                    )}
                </tbody>
            </table>}
            {!share.open_orders && <h3>No open orders to display</h3>}
            <button onClick={onTradeShare}>Trade</button>
            <button onClick={onCloseModal} title='Close'>Close</button>
        </section>
    )
}