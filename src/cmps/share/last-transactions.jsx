export function LastTransactions({ transaction }) {

    return (
        <>
            <th>{transaction.amount}</th>
            <th>{transaction.price_per_share}</th>
            <th>{transaction.price}</th>
            <th>{transaction.sale_date}</th>
        </>
    )
}