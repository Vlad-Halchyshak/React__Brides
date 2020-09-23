import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Paginator from "../Paginator/paginator";
import girl from "../../assets/girl.jpg";
import { UsersType } from "../../types/types";
import { Filter, getUsers, unfollowThunk } from "../../redux/Users_Reducer";
import { UsersSearch } from "./usersSearch";
import { useDispatch, useSelector } from "react-redux";
import { gainCurrentPage, gainPageSize, gainToggleFollowing, gainTotalUserCount, gainUsers, getUsersFilter } from "../../selectors/UsersSelector"
import {followThunk} from '../../redux/Users_Reducer'
import * as queryString from 'querystring'

type PropTypes = {} 
type QueryParams = {term?: string, page?: string, friend?: string}
export const Users: React.FC<PropTypes> = () => {
  const users = useSelector(gainUsers)
  const totalUsersCount = useSelector(gainTotalUserCount)
  const PageSize = useSelector(gainPageSize)
  const currentPage = useSelector(gainCurrentPage)
  const toggleFollowing = useSelector(gainToggleFollowing)
  const filter = useSelector(getUsersFilter)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(currentPage, PageSize, filter))
  }, [])

  const followT = (userId: number) => {
    dispatch(followThunk(userId))
  }
  const unfollowT = (userId: number) => {
    dispatch(unfollowThunk(userId))
  }

  const onPageChange = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, PageSize, filter))
  }
  const onFilterChanged = (filter: Filter) => {
    dispatch(getUsers(1, PageSize, filter))
  }

  const history = useHistory()
  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as QueryParams
    let actualPage = currentPage
    let actualFilter = filter
    if(!!parsed.page) actualPage = Number(parsed.page)
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }
    switch (parsed.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null }
        break
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break
    }
    dispatch(getUsers(actualPage, PageSize, actualFilter))
  }, []);

  useEffect(() => {
    const query: QueryParams = {}
    if (!!filter.term) query.term = filter.term
    if(filter.friend !== null) query.friend = String(filter.friend)
    if(currentPage !== 1) query.page = String(currentPage)
    history.push({
      pathname: '/friends',
      search: queryString.stringify(query) 
})
  }, [filter, currentPage])
  
 

  return (
    <div>
     
      
      <Paginator
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalUsersCount={totalUsersCount}
        PageSize={PageSize}
      />
<UsersSearch onFilterChanged={onFilterChanged} />
      <div className="users_container">
        {users.map((u: any) => (
          <div key={u.id}>
            <div className="users_photo">
              <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small != null ? u.photos.small : girl} />{" "}
              </NavLink>
            </div>
            <div className="users_name">
              <h3>
                {u.name}
                {u.followed ? (
                  <button
                    disabled={toggleFollowing.some((id) => id === u.id)}
                    onClick={() => {
                      unfollowT(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={toggleFollowing.some((id) => id === u.id)}
                    onClick={() => {
                      followT(u.id);
                      alert('you are followed this user')
                    }}
                  >
                    follow
                  </button>
                )}
              </h3>
            </div>
            <div> {"25"} years old </div>
            from {"Ukraine"}, {"Lviv"}
          </div>
        ))}
        </div>
        </div>
    
  )
}


export default Users
