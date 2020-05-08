import React from 'react'
import Users from './users'
import { connect } from 'react-redux'
import { followThunk, unfollowThunk, setCurrentPage, toggleIsFollowing, getUsers } from '../../redux/Users_Reducer'
import Loading from '../Loading/loading'
import { Redirect } from 'react-router-dom'
import { WithRedirect } from '../Hoc/AuthRedirect'
import { compose } from 'redux'
import { gainUsers, gainTotalUserCount, gainPageSize, gainCurrentPage, gainIsLoading, gainToggleFollowing } from '../../selectors/UsersSelector'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.PageSize)
  }

  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.PageSize)
    this.props.setCurrentPage(pageNumber)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to='/login' />
    return <>
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

let mapStateToProps = (state) => {
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
  connect(mapStateToProps,
    { followThunk, unfollowThunk, setCurrentPage, toggleIsFollowing, getUsers: getUsers }),

)(UsersContainer)









