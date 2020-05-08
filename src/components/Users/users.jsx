import React from 'react'
import styles from './users.scss'
import { NavLink } from 'react-router-dom'
import Paginator from '../Paginator/paginator'
import girl from '../../assets/girl.jpg'

let Users = ({ currentPage, totalUsersCount, onPageChange, PageSize, ...props }) => {

  return (

    <NavLink to={'/friends'}>
      <Paginator currentPage={currentPage} onPageChange={onPageChange}
        totalUsersCount={totalUsersCount} PageSize={PageSize} />
      <div className="users_container">
        {
          props.users.map(u => <div key={u.id}>
            <div className="users_photo">
              <NavLink to={"/profile/" + u.id} >
                <img src={u.photos.small != null ? u.photos.small : girl} /> </NavLink>
            </div>
            <div className="users_name">
              <h3>
                {u.name}
                {u.followed
                  ? <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={() => {
                    props.unfollowThunk(u.id)
                  }}>unfollow</button>
                  : <button disabled={props.toggleFollowing.some(id => id === u.id)} onClick={() => {
                    props.followThunk(u.id)
                  }}>follow</button>
                }
              </h3>
            </div>
            <div> {"25"} years old </div>
                     from {"Ukraine"}, {"Lviv"}
          </div>
          )}
      </div>
    </NavLink>
  )
}

export default Users