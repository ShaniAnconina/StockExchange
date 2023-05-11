import { useEffect, useState } from 'react'
import { shareService } from '../../services/share.service'

export function OpenOrder({ order }) {
    const [share, setShare] = useState({})

    useEffect(() => {
        getShareDetails()
    }, [])

    async function getShareDetails() {
        const share = await shareService.get(order.share_id)
        setShare(share)
    }

    return (
        <>
            <th>{share.name}</th>
            <th>{order.amount}</th>
            <th>{order.price_per_share}</th>
            <th>{order.price}</th>
        </>
    )
}