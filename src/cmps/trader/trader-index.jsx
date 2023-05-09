import { useEffect, useState } from "react";
import { TraderList } from "./trader-list";
import { httpService } from "../../services/http.service";

export function TraderIndex() {
    const [traders, setTraders] = useState([])
    // useEffect(() => {
    //     // loadTraders()
    //     const data = httpService.get('all_share_details')
    //     console.log('data:', data)
    // }, []
    // )

    return (
        <section className='trader-index'>
            <h1>Traders</h1>
            <TraderList />
            {/* <TraderList traders={traders} /> */}
        </section>
    )
}