import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadShares } from '../store/share/share.action'
import { ShareList } from '../cmps/share/share-list'
import { ShareDetails } from '../cmps/share/share-details'

export function HomePage() {
    const shares = useSelector((storeState) => storeState.shareModule.shares)
    const [isModal, setIsModal] = useState(null)

    useEffect(() => {
        loadShares()
    }, []
    )

    return (
        <section className='home-page'>
            <h1>Stock Exchange</h1>
            {shares && <ShareList shares={shares} setIsModal={setIsModal} />}
            {isModal && <ShareDetails isModal={isModal} setIsModal={setIsModal} />}
        </section>
    )
}