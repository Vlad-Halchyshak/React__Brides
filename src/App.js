import React, { Component } from 'react'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { UsersPage } from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { LoginPage } from './components/Login/Login'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initialize } from './redux/app_Reducer'
import Loading from './components/Loading/loading'
import { HashRouter } from 'react-router-dom'
import store, { AppStateType } from './redux/redux-store'
import { Provider } from 'react-redux'

import { LazySuspense } from './components/Hoc/LazySuspence'
import ProfileContainer from './components/Profile/profileContainer'
import EditPageContainer from './components/EditPage/EditPageContainer'

const ChatContainer = React.lazy(() =>
  import('./components/chats/chatsContainer')
)

const LazySuspended = LazySuspense(ChatContainer)

class App extends React.Component /* <mapProps & dispatch> */ {
  //@ts-ignore
  componentDidMount() {
    this.props.initialize()
  }
  render() {
    if (!this.props.initialized) {
      return <Loading />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
          <Route path="/friends" render={() => <UsersPage />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/MyAccount" render={() => <EditPageContainer />} />
          <Route path="/chats" render={() => <LazySuspended />} />
          <Route path="/VideoCalls" render={() => <LazySuspended />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
/* type dispatch = {
  initialize: () => void
}
type mapProps = ReturnType<typeof mapStateToProps> */

const mapStateToProps = (state /* : AppStateType */) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  /* <React.ComponentType> */ withRouter,
  connect(mapStateToProps, { initialize })
)(App)

const BridesApp /* : React.FC */ = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default BridesApp
