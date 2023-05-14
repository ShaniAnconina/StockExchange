import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { shareService } from '../../services/share.service'
import { userService } from '../../services/user.service'

export function OpenOrder({ order, setIsTrade, setIsModal }) {
    const [share, setShare] = useState({})
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser)

    useEffect(() => {
        getShareDetails()
    }, [])

    async function getShareDetails() {
        const share = await shareService.get(order.share_id)
        setShare(share)
    }

    async function onCancelRequest() {
        await shareService.deleteShare(order.trader_id, order.share_id)

        const trader = userService.getLoggedinUser()
        console.log('order:', order)
        trader.money += order.price
        userService.setLoggedinUser(trader)
        setIsTrade(false)
        setIsModal(null)
        alert('Your request has been successfully cancelled')
    }

    return (
        <>
            <th>{order.amount}</th>
            <th>{order.price_per_share}</th>
            <th>{order.price}</th>
            <th>{order.trader_id === loggedinUser.trader_id && <button className='cancel-req' onClick={onCancelRequest}>Cancel</button>}</th>
        </>
    )
}