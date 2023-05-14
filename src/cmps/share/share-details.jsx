import { useEffect, useState } from 'react'
import { shareService } from '../../services/share.service'
import { userService } from '../../services/user.service'
import { DetailsModal } from './details-modal'
import { TradeModal } from './trade-modal'

export function ShareDetails({ isModal, setIsModal }) {
    const [share, setShare] = useState({})
    const [isTrade, setIsTrade] = useState(false)
    const [amount, setAmount] = useState('')

    useEffect(() => {
        getShareDetails()
    }, [])

    async function getShareDetails() {
        const currShare = await shareService.get(isModal)
        if (currShare.last_transactions && currShare.last_transactions.length > 10) currShare.last_transactions.slice(0, 10)
        setShare(currShare)
    }

    async function onTradeShare(isSell) {
        try {
            const trader = userService.getLoggedinUser()
            await shareService.tradeShare(trader.trader_id, share.share_id, +amount, +share.cur_price.toString().substring(0, 7), isSell)
            if (isSell) trader.money += amount
            else trader.money -= amount
            userService.setLoggedinUser(trader)
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

    function onCloseModal() {
        setIsModal(null)
        if (isTrade) setIsTrade(false)
    }

    if (!share) return
    return (
        <section className='share-details' >
            <DetailsModal share={share} onCloseModal={onCloseModal} setIsModal={setIsModal} isTrade={isTrade} setIsTrade={setIsTrade} />
            <TradeModal share={share} onCloseModal={onCloseModal} onSubmitForm={onSubmitForm} isTrade={isTrade} setIsTrade={setIsTrade} amount={amount} setAmount={setAmount} />
        </section>
    )
}