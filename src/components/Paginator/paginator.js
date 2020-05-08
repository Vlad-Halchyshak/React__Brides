import React, {useState} from 'react'
import s from './paginator.module.css'
import cn from 'classnames'

let Paginator = ({totalUsersCount, PageSize, currentPage, onPageChange, portionSize = 5 }) => {
    let PagesCount = Math.ceil(totalUsersCount / PageSize)
    let Pages = [];
    for (let i = 1; i <= PagesCount; i++) {
      Pages.push(i)
    }

let PortionCount = Math.ceil(PagesCount / portionSize)
let [PortionNumber, setPortionNumber] = useState(1)
let leftPortionPageNumber = (PortionNumber - 1) * portionSize + 1
let rightPortionPageNumber = PortionNumber * portionSize


return  <div className={s.paginator}>
  <div className={s.results}>Results: {totalUsersCount} ladies</div>
  {PortionNumber > 1 && 
  <button onClick={ () =>{setPortionNumber(PortionNumber - 1) }}> {"<<"} </button>}

  { Pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
  .map((p) => {
    return <span className={cn ({
      [s.selectedPage] : currentPage === p },
      s.pageNumber) } key={p}
      onClick={(e) => { onPageChange(p) }}>{p}</span>
  })}
  {PortionCount > PortionNumber && 
   <button onClick={() => {setPortionNumber(PortionNumber + 1) }}>next</button>}
  </div>
}


export default Paginator