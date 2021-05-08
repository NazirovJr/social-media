export const getUsers = (state) => {
    return state.usersPage.users
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getTotalPage = (state) => {
    return state.usersPage.totalPage
}
export const getAmountUser = (state) => {
    return state.usersPage.amountUser
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowInProgress = (state) => {
    return state.usersPage.followInProgress
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}
