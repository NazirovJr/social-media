import React from "react";
import style from  './NextPannel.module.css'
let NextPannel = ({totalPage, amountUser, currentPage, onPageChange}) => {

    let pageCount = Math.ceil(totalPage / amountUser)
    let pages = []
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }
    return <div className={style.pages}>
            {
                pages.map(el => {
                    return <span
                        className={currentPage === el && style.activePage}
                        onClick={(e) => {
                            onPageChange(el)
                        }}>{el}</span>
                })
            }
        </div>
}

export default NextPannel

