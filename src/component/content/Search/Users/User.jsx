import React from "react";
import style from './Users.module.css'
import icoDefault from '../../../../assets/image/ico.jpg'
import {NavLink} from "react-router-dom";


let User = ({user, followInProgress, follow, unFollow}) => {
    return (
        <div>
            <div className={style.user}>
                <div>
                    <NavLink to={`/profile/${user.id}`}><img className={style.user_logo}
                                                             src={user.photos.small === null ? icoDefault : user.photos.small}
                                                             alt=""/></NavLink></div>
                <span>
                    <div className="text">{user.name}</div>
                </span>
                {
                    user.followed
                        ?
                        <button disabled={followInProgress.some(id => id === user.id)} className={style.btn}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                        : <button disabled={followInProgress.some(id => id === user.id)} className={style.btn}
                                  onClick={() => {
                                      unFollow(user.id)
                                  }}>UnFollow</button>
                }

            </div>
        </div>
    )
}

export default User

