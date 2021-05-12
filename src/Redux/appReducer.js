import {authUser} from "./authReducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

const InitializeState = {
    initialize: false
}

export const appReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default:
            return state;
    }
}

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS})

export const initialized = () => (dispatch) => {
        dispatch(authUser()).then(() => {
            dispatch(initializeSuccess())
        })
}
export default appReducer