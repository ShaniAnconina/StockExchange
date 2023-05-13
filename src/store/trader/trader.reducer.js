export const SET_TRADERS = 'SET_TRADERS'

const initialState = {
    traders: [],
}

export function traderReducer(state = initialState, action) {
    // let traders

    switch (action.type) {
        case SET_TRADERS:
            return { ...state, traders: action.traders }

        default:
            return state
    }
}