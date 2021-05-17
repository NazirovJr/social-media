import {authUser} from "./authReducer";

const INITIALIZE_SUCCESS = 'app/INITIALIZE_SUCCESS'

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

export const initialized = () => async (dispatch) => {
        await dispatch(authUser())
       dispatch(initializeSuccess())

}
export default appReducer