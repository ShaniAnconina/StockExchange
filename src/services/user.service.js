import axios from "axios"
import { httpService } from "./http.service"

const STORAGE_KEY_LOGGEDIN = 'user_DB'

export const userService = {
    getEmptyCredentials,
    login,
    logout,
    getLoggedinUser,
    query,
    buyShare
}

function getEmptyCredentials() {
    return {
        name: '',
        id: ''
    }
}

async function login(userCred) {
    const loggedinUser = getLoggedinUser()
    if (loggedinUser) return
    const user = await axios({
        url: `//localhost:8000/get_trader_info`,
        method: 'GET',
        data: null,
        params: { trader_id: userCred.id }
    })
    _setLoggedinUser(user.data)
    return user.data
}

async function logout() {
    localStorage.removeItem(STORAGE_KEY_LOGGEDIN)
}
async function buyShare({ trader_id, share_id, amount, price_per_share, is_sell }) { //amount is the count off shares && price_per_share is the price per one share
    try {
        const request = await axios({
            url: `//localhost:8000/place_order`,
            method: 'POST',
            data: null,
            params: { trader_id, share_id, amount, price_per_share, is_sell }
        })
        return request
    } catch (err) {
        throw err
    }
}

async function query(traderId) {
    try {
        const transactions = await axios({
            url: `//localhost:8000/get_last_trader_transactions`,
            method: 'GET',
            data: null,
            params: { trader_id: traderId }
        })
        console.log('transactions:', transactions)
        return transactions.data
    } catch (err) {
        throw err
    }
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser(user) {
    localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}