import { SharePreview } from "./share-preview"

export function ShareList({ shares, setIsModal }) {

    return (
        <section className='share-list'>
            {shares.map(share =>
                <SharePreview key={share.share_id} share={share} setIsModal={setIsModal} />
            )}
        </section>
    )
}