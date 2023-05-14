import { TransactionPreview } from "./transaction-preview"

export function TransactionList({ transactions }) {
    console.log('transactions:', transactions)
    return (
        <div className="transaction-list">
            <table>
                <thead>
                    <tr>
                        <th>Share</th>
                        <th>Amount</th>
                        <th>Price per share</th>
                        <th>Total price</th>
                        <th>Seller ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, idx) =>
                        <TransactionPreview key={idx + transaction.share_id} transaction={transaction} />
                    )}
                </tbody>
            </table>
        </div>
    )
}