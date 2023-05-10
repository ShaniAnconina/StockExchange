import { userService } from "../../services/user.service"
import { store } from "../store"
import { SET_USER, SET_USER_TRANSACTIONS } from "./user.reducer"

export async function login(credentials) {
    try {
        const loggedinUser = await userService.login(credentials)
        store.dispatch({ type: SET_USER, loggedinUser })
        // return loggedinUser
    } catch (err) {
        throw err
    }
}

export function logOut() {
    userService.logout()
    store.dispatch({ type: SET_USER, loggedinUser: null })
}

export async function loadTraderTransactions(traderId) {
    try {
        const transactions = await userService.query(traderId)
        console.log('transactions:', transactions)
        store.dispatch({ type: SET_USER_TRANSACTIONS, transactions })
        // return transactions
    } catch (err) {
        throw err
    }
}