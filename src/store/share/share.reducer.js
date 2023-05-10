export const SET_SHARES = 'SET_SHARES'

const initialState = {
    shares: [],
}

export function shareReducer(state = initialState, action) {
    let shares

    switch (action.type) {
        case SET_SHARES:
            return { ...state, shares: action.shares }

        default:
            return state
    }
}