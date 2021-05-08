import React from "react";
import style from './Users.module.css'
import icoDefault from '../../../../assets/image/ico.jpg'
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalPage / props.amountUser)
    let pages = []
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }
    return <div className={style.users}>
        <div className={style.pages}>
            {
                pages.map(el => {
                    return <span
                        className={props.currentPage === el && style.activePage}
                        onClick={(e) => {
                            props.onPageChange(el)
                        }}>{el}</span>
                })
            }
        </div>
        {
            props.users.map(el => <div>
                    <div className={style.user}>
                        <div>
                            <NavLink to={`/profile/${el.id}`}><img className={style.user_logo}
                                                                   src={el.photos.small === null ? icoDefault : el.photos.small}
                                                                   alt=""/></NavLink></div>
                        <span>
                    <div className="text">{el.name}</div>
                </span>
                        {
                            el.followed
                                ?
                                <button  disabled={props.followInProgress.some(id => id === el.id)} className={style.btn}
                                         onClick={() => {props.follow(el.id)}}>Follow</button>
                                : <button disabled={props.followInProgress.some(id => id === el.id)} className={style.btn}
                                          onClick={() => {props.unFollow(el.id)}}>UnFollow</button>
                        }

                    </div>
                </div>
            )

        }

    </div>
}

export default Users

