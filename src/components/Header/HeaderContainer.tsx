import React from 'react'
import Header, { dispatch, mapProps } from './Header'
import {logout } from '../../redux/Auth_Reducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'


class HeaderContainer extends React.Component<mapProps & dispatch> {
 
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect<mapProps, dispatch, {}, AppStateType>(mapStateToProps, {logout })(HeaderContainer)