import React from 'react'
import Users from './users'
import { useSelector } from 'react-redux'
import Loading from '../Loading/loading'
import { gainIsLoading } from '../../selectors/UsersSelector'
import { Filter } from '../../redux/Users_Reducer'
import { UsersType } from '../../types/types'
//import { Redirect } from 'react-router-dom'




type PropTypes = {
  totalUsersCount: any; 
   PageSize: number; 
   currentPage: number; 
   onPageChange: (pageNumber: number) => void 
   users: Array<UsersType>; 
   toggleFollowing: Array<number>; 
   unfollowThunk: (userId: number) => void;
   followThunk: (userId: number) => void; 
   onFilterChanged: (filter: Filter) => void 
}; 



export const UsersPage: React.FC<PropTypes > = ({totalUsersCount, PageSize, currentPage}) => {
  const isLoading = useSelector(gainIsLoading);

  /* if (!this.props.isAuth) return <Redirect to='/login' /> */

  return (
    <>
      {/* {props.title} */}
      {isLoading ? <Loading /> : null}
      <Users
        /* totalUsersCount={totalUsersCount}
        PageSize={PageSize}
        currentPage={currentPage}
        followThunk={followThunk}
        unfollowThunk={unfollowThunk}
        onPageChange={onPageChange}
        users={users}
        toggleFollowing={toggleFollowing} */
      />
    </>
  );
};













