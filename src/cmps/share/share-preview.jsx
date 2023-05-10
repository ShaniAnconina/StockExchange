export function SharePreview({ share }) {

    if (!share) return <span></span>
    return (
        <section className='share-list'>
            <h1>{share.share_id}</h1>
            <h1>{share.name}</h1>
            <h1>{share.cur_price}</h1>
            {/* <h1>{share.last_transactions[0]}</h1> */}
            {/* <h1>{share.open_orders}</h1> */}
        </section>
    )
}