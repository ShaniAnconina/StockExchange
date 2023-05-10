import { SharePreview } from "./share-preview"

export function ShareList({ shares }) {

    return (
        <section className='share-list'>
            <h1>shares list</h1>
            {shares.map(share =>
                <SharePreview key={share._id} share={share} />
            )}
        </section>
    )
}