import React from 'react'
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
        <div className={`${style.nav} nav`}>
            <div className={style.item}><NavLink to='/profile'>Profile</NavLink></div>
            <div className={style.item}><NavLink to={'#'}>News</NavLink></div>
            <div className={style.item}><NavLink to='/dialogs'>Message</NavLink></div>
            <div className={style.item}><NavLink to={'#'}>Groups</NavLink></div>
            <div className={style.item}><NavLink to={'#'}>Musics</NavLink></div>
            <div className={style.item}><NavLink to={'/search/users'}>Search</NavLink></div>
            <div className={style.item}><NavLink to={'#'}>Settings></NavLink></div>
        </div>
    )
}

export default NavBar