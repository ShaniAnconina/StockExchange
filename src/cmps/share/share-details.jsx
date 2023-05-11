import { useEffect, useState } from "react"
import { shareService } from "../../services/share.service"
import { OpenOrder } from "./open-order"

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

    if (!share) return
    return (
        <section className='share-details' >
            <h2>{share.name}</h2>
            <p>${share.cur_price}</p>
            <h3>Open orders:</h3>
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
                        <tr>
                            <OpenOrder key={order.share_id} order={order} />
                        </tr>
                    )}
                </tbody>
            </table>}
            {!share.open_orders && <h3>No open orders to display</h3>}
            <button>Trade</button>
            <button onClick={onCloseModal} title='Close'>Close</button>
        </section>
    )
}