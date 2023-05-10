import { traderService } from '../../services/trader.service.js'
import { SET_TRADERS } from './trader.reducer.js'
import { store } from '../store.js'

export async function loadTraders() {
    try {
        let traders = await traderService.query()
        store.dispatch({ type: SET_TRADERS, traders })
        return traders
    } catch (err) {
        throw err
    }
}
