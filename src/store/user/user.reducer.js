import { userService } from "../../services/user.service"

export const SET_USER = 'SET_USER'
export const SET_USER_TRANSACTIONS = 'SET_USER_TRANSACTIONS'

const initialState = {
    loggedinUser: userService.getLoggedinUser(),
    transactions: [],
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, loggedinUser: action.loggedinUser }
        case SET_USER_TRANSACTIONS:
            return { ...state, transactions: action.transactions }

        default:
            return state
    }
}