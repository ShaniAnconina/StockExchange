import { TraderPreview } from "./trader-preview";

// export function TraderList() {
export function TraderList({traders}) {


    return (
        <section className='trader-list'>
            <h1>traders list</h1>
            {traders.map(trader =>
                <TraderPreview key={trader._id} trader={trader} />
            )}
        </section>
    )
}