import React from 'react'
import Users from './users'
import { connect } from 'react-redux'
import { followThunk, unfollowThunk,  getUsers } from '../../redux/Users_Reducer'
import Loading from '../Loading/loading'
import { Redirect } from 'react-router-dom'
import { WithRedirect } from '../Hoc/AuthRedirect'
import { compose } from 'redux'
import { gainUsers, gainTotalUserCount, gainPageSize, gainCurrentPage, gainIsLoading, gainToggleFollowing } from '../../selectors/UsersSelector'
import { UsersType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'



type MapStatePropsType = {
  users: Array<UsersType>
  totalUsersCount: number
  PageSize: number
  currentPage: number
  isLoading: boolean
  toggleFollowing: Array<number>
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, PageSize: number) => void
  unfollowThunk: (userId: number) => void
  followThunk: (userId: number) => void
  setCurrentPage: (pageNumber: number) => void
  toggleIsFollowing: any 
/* isAuth: boolean */
}
type OwnPropTypes = {
  title: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropTypes
class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.PageSize)
  }

  onPageChange = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.PageSize)
    /* this.props.setCurrentPage(pageNumber) */
  }

  render() {
    /* if (!this.props.isAuth) return <Redirect to='/login' /> */
    return <>
      {this.props.title}
      {this.props.isLoading ? <Loading /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        PageSize={this.props.PageSize}
        currentPage={this.props.currentPage}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
        onPageChange={this.onPageChange}
        users={this.props.users}
        toggleFollowing={this.props.toggleFollowing}

      />
    </>
  }
}

let mapStateToProps = (state: AppStateType ): MapStatePropsType  => {
  return {
    users: gainUsers(state),
    totalUsersCount: gainTotalUserCount(state),
    PageSize: gainPageSize(state),
    currentPage: gainCurrentPage(state),
    isLoading: gainIsLoading(state),
    toggleFollowing: gainToggleFollowing(state)
  }
}

export default compose(
  WithRedirect,
  //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
  //@ts-ignore
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropTypes, AppStateType>(
    mapStateToProps,
    { followThunk, unfollowThunk, getUsers: getUsers }),

)(UsersContainer)









