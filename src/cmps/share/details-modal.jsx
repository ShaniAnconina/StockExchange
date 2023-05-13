import { LastTransactions } from "./last-transactions"
import { OpenOrder } from "./open-order"

export function DetailsModal({ share, setIsModal, isTrade, setIsTrade, onCloseModal }) {

    return (
        <>
            {!isTrade && <div className="details-modal">
                <h2>{share.name}</h2>
                <p>${share.cur_price}</p>
                <h3>Open orders</h3>
                {share.open_orders && <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Price per share</th>
                            <th>Total price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {share.open_orders.map((order, idx) =>
                            <tr key={idx}>
                                <OpenOrder order={order} setIsTrade={setIsTrade} setIsModal={setIsModal} />
                            </tr>
                        )}
                    </tbody>
                </table>}
                {!share.open_orders && <p>No open orders to display</p>}

                <h3>Last transactions</h3>
                {share.last_transactions && <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Price per share</th>
                            <th>Total price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {share.last_transactions.map((transaction, idx) =>
                            <tr key={idx}>
                                <LastTransactions transaction={transaction} />
                            </tr>
                        )}
                    </tbody>
                </table>}
                {!share.last_transactions && <p>No transactions to display</p>}
                <button onClick={() => setIsTrade(true)}>Trade</button>
                <button onClick={onCloseModal} title='Close'>Close</button>
            </div>}
        </>
    )
}