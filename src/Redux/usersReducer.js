import {usersAPI} from "../API/api";
import {stateArrayChange} from "../utilits/reducer_utilits/arrayChange";

const FOLLOW = 'users/FOLLOW'
const UN_FOLLOW = 'users/UN-FOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'users/SET-TOTAL-USERS'
const SET_LOADER = 'users/SET-LOADER'
const TOGGLE_FOLLOW_IN_PROGRESS = 'users/TOGGLE_FOLLOW-IN-PROGRESS'

const InitializeState = {
    users: [],
    currentPage: 1,
    totalPage: 0,
    amountUser: 20,
    isFetching: true,
    followInProgress: [],

}

const usersReducer = (state = InitializeState, action) => {
    switch (action.type) {
        case FOLLOW:
            debugger
            return {
                ...state,
                users: stateArrayChange(state.users, action.userId, "id", {followed: true})
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: stateArrayChange(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS:
            return {
                ...state,
                totalPage: action.amount
            }
        case SET_LOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalPage = (amount) => ({type: SET_TOTAL_USERS, amount})
export const IsFetching = (isFetching) => ({type: SET_LOADER, isFetching})
export const followIPAC = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId})


export const requestUsers = (currentPage, amountUser) => {
    return async (dispatch) => {
        dispatch(IsFetching(true))
        const data = await usersAPI.getUsers(currentPage, amountUser)
        dispatch(IsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalPage(data.totalCount))
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(followIPAC(true, userId))
        const data = await usersAPI.unFollowUser(userId)

        if (data.resultCode === 0) {
            dispatch(unFollowSuccess(userId))
        }
        dispatch(followIPAC(false, userId))

    }
}
export const unFollow = (userId) => {
    return async (dispatch) => {
        dispatch(followIPAC(true, userId))
        const data = await usersAPI.followUser(userId)

        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(followIPAC(false, userId))

    }
}


export default usersReducer