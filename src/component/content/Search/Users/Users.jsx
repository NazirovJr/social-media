import React from "react";
import style from './Users.module.css'
import User from "./User";
import NextPannel from "../../../../utilits/scroll/NextPannel";


let Users = (props) => {

    return <div className={style.users}>
        <NextPannel totalPage={props.totalPage} amountUser={props.amountUser} currentPage={props.currentPage} onPageChange={props.onPageChange}/>
        {
            props.users.map(user => <User user={user} followInProgress={props.followInProgress} follow={props.follow}
                                          unFollow={props.unFollow}/>)
        }
    </div>
}

export default Users

