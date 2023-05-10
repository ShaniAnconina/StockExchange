import { useEffect } from "react"
import { loadShares } from "../store/share/share.action"
import { useSelector } from "react-redux"
import { ShareList } from "../cmps/share/share-list"

export function HomePage() {
    const shares = useSelector((storeState) => storeState.shareModule.shares)

    useEffect(() => {
        loadShares()
        console.log('shares:', shares)
    }, []
    )

    return (
        <section className='home-page'>
            <h1>homepage</h1>
            {shares && <ShareList shares={shares} />}
        </section>
    )
}