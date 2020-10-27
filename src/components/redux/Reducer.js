export const initialState = {
    user: null
}

export const actionValues = {
    SET_USER: "SET_USER"
}

const Reducer = (action, state) => {
    switch (action.type) {
        case actionValues.SET_USER :
            return {...state, user: action.user}
        default:
            return state;
    }
}

export default Reducer;