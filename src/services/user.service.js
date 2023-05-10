import axios from "axios"

const STORAGE_KEY_LOGGEDIN = 'user_DB'

export const userService = {
    getEmptyCredentials,
    login,
    logout,
    getLoggedinUser
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
    return user
}

async function logout() {
    localStorage.removeItem(STORAGE_KEY_LOGGEDIN)
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser(user) {
    localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
}