export function TradeModal({ share, onSubmitForm, amount, setAmount, isTrade, setIsTrade, onCloseModal }) {

    function handleChange({ target }) {
        const { value } = target
        setAmount(value)
    }


    function backToDetails() {
        setIsTrade(false)
    }


    return (
        <>
            {isTrade && <form className="trade-modal" >
                <h2>{share.name}</h2>
                <p>Please type an amount</p>
                <div>
                    < input type="number"
                        name="amount"
                        value={amount}
                        placeholder="Amount"
                        min="0"
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={() => onSubmitForm(false)}>Buy</button>
                <button type="button" onClick={() => onSubmitForm(true)}>Sell</button>
                <button type="button" onClick={backToDetails}>Back to details</button>
                <button type="button" onClick={onCloseModal}>Close</button>
            </form>}
        </>
    )
}