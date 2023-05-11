import { store } from '../store.js'
import { SET_TRADERS } from './trader.reducer.js'
import { traderService } from '../../services/trader.service.js'

export async function loadTraders() {
    try {
        let traders = await traderService.query()
        store.dispatch({ type: SET_TRADERS, traders })
        return traders
    } catch (err) {
        throw err
    }
}
