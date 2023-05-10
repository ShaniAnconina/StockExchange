import { shareService } from '../../services/share.service.js'
import { SET_SHARES } from './share.reducer.js'
import { store } from '../store.js'

export async function loadShares() {
    try {
        let shares = await shareService.query()
        store.dispatch({ type: SET_SHARES, shares })
        return shares
    } catch (err) {
        throw err
    }
}
