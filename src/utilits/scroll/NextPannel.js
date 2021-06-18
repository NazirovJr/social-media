import React, {useState} from "react";
import style from  './NextPannel.module.css'
let NextPannel = ({totalPage, amountUser, currentPage, onPageChange, partotationSize: partitionSize = 10}) => {

    let pageCount = Math.ceil(totalPage / amountUser)
    let pages = []
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    let partitionCount = (pageCount / partitionSize)
    let [partitionNumber, setPartitionNumber] = useState(1)
    let leftEdgePartition = (partitionNumber - 1) * partitionSize - 1
    let rightPartition = partitionNumber * partitionSize

    return <div className={style.pages}>
        {partitionNumber > 1 && <button onClick={() => setPartitionNumber(partitionNumber - 1)}>last</button>}

            {
                pages
                    .filter(el => el >= leftEdgePartition && el <= rightPartition)
                    .map(el => {
                    return <span
                        className={currentPage === el && style.activePage}
                        onClick={(e) => {
                            onPageChange(el)
                        }}>{el}</span>
                })
            }

        {partitionCount > partitionNumber && <button onClick={() => setPartitionNumber(partitionNumber + 1)}>Next</button>}

    </div>
}

export default NextPannel

