import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, logoutUser}) => {

    return(
        <div className={`${style.header} header`}>
            <img className={style.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz63Gm87gx5G6vvpTJc3etqpi7i5TbU15Jg&usqp=CAU" alt="#"/>
            <div className={style.btn_log}>
                {!isAuth ? <NavLink to={"login"}>Login</NavLink>:<button onClick={logoutUser}>Log out</button>}
            </div>
        </div>
    )
}

export default Header