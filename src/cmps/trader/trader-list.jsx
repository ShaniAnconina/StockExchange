import { TraderPreview } from "./trader-preview";

export function TraderList({ traders }) {

    return (
        <section className='trader-list'>
            {traders.map(trader =>
                <TraderPreview key={trader._id} trader={trader} />
            )}
        </section>
    )
}