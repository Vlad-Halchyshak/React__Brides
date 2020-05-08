import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/Profile_Reducer'
import { withRouter } from 'react-router-dom'
import {WithRedirect} from '../Hoc/AuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUser;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUsersProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {

    return (
      <Profile {...this.props}
        profile={this.props.profile}
        StatusHook={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
  authorizedUser: state.auth.userId,
  isAuth: state.auth.isAuth
})




export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  WithRedirect, //HOC
)(ProfileContainer)