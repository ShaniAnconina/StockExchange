export function SharePreview({ share, setIsModal }) {

    function onOpenModal() {
        setIsModal(true)
    }

    if (!share) return
    return (
        <section className='share-preview' >
            <h2>{share.name}</h2>
            <p>{share.cur_price}</p>
            {/* <h1>{share.last_transactions[0]}</h1> */}
            {/* <h1>{share.open_orders}</h1> */}
            <div className="btns">
                <button onClick={onOpenModal}>Details</button>
                <button>Trade</button>
            </div>
        </section>
    )
}