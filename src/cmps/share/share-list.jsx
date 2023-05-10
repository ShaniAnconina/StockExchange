import { SharePreview } from "./share-preview"

export function ShareList({ shares, setIsModal }) {

    //TODO: get more info about the share and render
    //TODO: implament a buying function {amount}
    //TODO: implament a sell function {mmount}
    //TODO: purchase cancellation



    return (
        <section className='share-list'>
            {shares.map(share =>
                <SharePreview key={share.share_id} share={share} setIsModal={setIsModal} />
            )}
        </section>
    )
}