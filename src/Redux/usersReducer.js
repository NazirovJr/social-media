
import { usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const SET_LOADER = 'SET-LOADER'
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW-IN-PROGRESS'

const InitializeState = {
    users :[],
    currentPage:1,
    totalPage:0,
    amountUser:20,
    isFetching:true,
    followInProgress:[],

}

const usersReducer = (state=InitializeState,action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId){
                        return {...el,followed : true}
                    }
                    return el
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId){
                        return {...el,followed : false}
                    }
                    return el
                })
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
                    ? [...state.followInProgress,action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type:FOLLOW,userId})
export const unFollowSuccess = (userId) =>({type:UN_FOLLOW,userId})
export const setUsers = (users) =>({type:SET_USERS,users})
export const setCurrentPage = (currentPage) =>({type:SET_CURRENT_PAGE,currentPage})
export const setTotalPage = (amount) =>({type:SET_TOTAL_USERS,amount})
export const IsFetching = (isFetching) =>({type:SET_LOADER,isFetching})
export const followIPAC = (isFetching, userId) =>({type:TOGGLE_FOLLOW_IN_PROGRESS,isFetching,userId})


export const requestUsers = (currentPage, amountUser) =>{
    return (dispatch) =>
    {
        dispatch(IsFetching(true))
        usersAPI.getUsers(currentPage, amountUser).then(data => {
            dispatch(IsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalPage(data.totalCount))
        })
    }
}
export const follow = (userId) =>{
    return (dispatch) =>{
        dispatch(followIPAC(true, userId))
        usersAPI.unFollowUser(userId)
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(followIPAC(false, userId))
            })
    }
}
export const unFollow = (userId) =>{
    return (dispatch) =>{
        dispatch(followIPAC(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(followIPAC(false, userId))
            })
    }
}



export default usersReducer