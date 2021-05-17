import {profileAPI, usersAPI} from "../API/api";


const ADD_POST = 'posCreator/ADD-POST'
const SET_PROFILE_USERS = 'posCreator/SET-PROFILE-USERS'
const SET_USER_STATUS = 'posCreator/SET-USER-STATUS'

const  InitializeState = {
    postsArr: [
        {
        title: 'Что значит работать удаленно?',
        text: 'Удалённая рабо́та или работа на дому — форма занятости, при которой работодатель и наёмный работник находятся на значительном расстоянии друг от друга, передавая и получая техническое задание, результаты труда и оплату при помощи современных средств связи.',
        photo: '/images/online.jpg',
    },

        {
            title: 'Что значит работать фрилансером ?',
            text: 'Фрила́нсер — свободный работник. Термин фрилансер обычно приписывается Вальтеру Скотту используется в романе «Айвенго» для описания средневекового наёмного воина, букв. «вольного копейщика», но употреблялся и ранее, по крайней мере, с самого начала XIX века.',
            photo: '/images/freelancer.jpg',
        }],
    currentPost: {
            title:'',
            text:'',
            url:''
    },
    profile:null,
    status:null
}
const postCreatReducer = (state=InitializeState,action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsArr: [
                    ...state.postsArr,
                    {
                    title: action.arr[0],
                    text:action.arr[1],
                    url:action.arr[2]
                }],
                currentPost: {
                    title: '',
                    text: '',
                    url: ''
                }
            }
        case SET_PROFILE_USERS:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = (arr) => ({type:ADD_POST,arr})
export const setUsersProfile = (profile) => ({type:SET_PROFILE_USERS,profile})
export const setUserStatus = (status) =>({type:SET_USER_STATUS,status})

export const getProfile = (userId) =>{
    return async (dispatch) =>{
        const data = await usersAPI.getProfile(userId)
            dispatch(setUsersProfile(data))
    }
}

export const getStatus = (userId) =>{
    return async (dispatch) =>{
        const data = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(data))
    }
}


export const updateStatus = (status) =>{
    return async (dispatch) =>{
        const data = await profileAPI.updateStatus(status)
            dispatch(setUserStatus(data))
    }
}


export default postCreatReducer