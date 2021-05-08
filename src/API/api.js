import React from "react";
import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "cc5cac6b-721d-43fc-94a9-ffd0411ae4f8"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }
)

export const usersAPI = {
    getUsers:(currentPage = 1, amountUser = 7) => {
        return  instance.get(`users?page=${currentPage}&count=${amountUser}`).then(res => res.data)
    },
    getProfile:(userId) => {
        return  instance.get(`profile/${userId}`).then(res => res.data)
    },
    unFollowUser:(id) => {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    followUser:(id) => {
        return instance.post(`follow/${id}`).then(res => res.data)
    }
}

export const profileAPI = {
    getProfile:(userId) => {
        return  instance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus:(userId) => {
        return instance.get(`profile/status/${userId}`).then(res => {
            return res.statusText
        })
    },
    updateStatus:(status) =>{
        debugger
        return instance.put(`profile/status`,{status}).then(res => {
            debugger
            res.data.message.join('')
        })
    }
}

export const authAPI = {
    authUser:() => {
        return  instance.get(`auth/me`).then(res => res.data)
    },
    loginUser:(email, password, rememberMe = false) => {
        return  instance.post(`auth/login`,{email, password, rememberMe}).then(res => res.data)
    },
    logoutUser:() => {
        return  instance.delete(`auth/login`).then(res => res.data)
    }
}
