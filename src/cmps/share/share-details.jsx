export function ShareDetails({ setIsModal }) {

    function onCloseModal() {
        setIsModal(false)
    }
    return (
        <section className='share-details' >
            <button onClick={onCloseModal} title='Close'>X</button>

        </section>
    )
}