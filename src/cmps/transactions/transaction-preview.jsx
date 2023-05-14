import { useEffect, useState } from "react"
import { shareService } from "../../services/share.service"

export function TransactionPreview({ transaction }) {
    const [shareName, setShareName] = useState('')


    useEffect(() => {
        getShareDetails()
    }, [])

    async function getShareDetails() {
        const shareDetails = await shareService.get(transaction.share_id)
        setShareName(shareDetails.name)
    }

    return (
        <tr>
            <th>{shareName}</th>
            <th>{transaction.amount}</th>
            <th>{transaction.price_per_share}</th>
            <th>{transaction.price}</th>
            <th>{transaction.seller_id}</th>
            <th>{transaction.sale_date}</th>
        </tr>
    )
}