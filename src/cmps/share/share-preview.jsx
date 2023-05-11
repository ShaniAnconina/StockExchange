export function SharePreview({ share, setIsModal }) {

    function onOpenModal(shareId) {
        setIsModal(shareId)
    }

    if (!share) return
    return (
        <section className='share-preview' >
            <h2>{share.name}</h2>
            <p>${share.cur_price.toString().substring(0, 7)}</p>
            <div className="btns">
                <button onClick={() => onOpenModal(share.share_id)}>Details</button>
            </div>
        </section>
    )
}