import { useEffect } from "react"
import { httpService } from "../services/http.service"

export function HomePage() {

    useEffect(async () => {
        // loadTraders()
        const data = await httpService.get('get_trader_names')

        console.log('data:', data)
    }, []
    )

    return (
        <section className='home-page'>
            <h1>homepage</h1>

        </section>
    )
}