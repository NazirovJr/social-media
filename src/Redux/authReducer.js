import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'

const InitializeState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUser = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const authUser = () => {
    return async (dispatch) => {
        const data = await authAPI.authUser()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUser(id, email, login, true))
        }
    }
}
export const loginUser = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await authAPI.loginUser(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authUser())
        } else {
            const msgError = data.messages.length > 0 ? data.messages : "Common Error"
            dispatch(stopSubmit("login", {_error: msgError}))
        }
    }
}
export const logoutUser = () => {
    return async (dispatch) => {
        const data = await authAPI.logoutUser()
            if (data.resultCode === 0) {
                dispatch(setUser(null, null, null, false))
            }
    }
}
export default authReducer