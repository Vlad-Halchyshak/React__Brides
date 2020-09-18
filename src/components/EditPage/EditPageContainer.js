import React from 'react'
import {connect} from 'react-redux'
import {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/Profile_Reducer'
import { withRouter } from 'react-router-dom'
import {WithRedirect} from '../Hoc/AuthRedirect'
import { compose } from 'redux'
import EditPage from './EditPage'


class EditPageContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUser;
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUsersProfile(userId)
    
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
      <EditPage 
        profile={this.props.profile}
        isOwner={!this.props.match.params.userId}
        saveProfile={this.props.saveProfile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  authorizedUser: state.auth.userId,
  isAuth: state.auth.isAuth
})




export default compose(
  connect(mapStateToProps, { getUsersProfile,  saveProfile}),
  withRouter,
  //WithRedirect, //HOC
)(EditPageContainer)