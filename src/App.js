import React, { Component } from 'react';
import styles from './App.scss';
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import {Route, withRouter, Switch, Redirect} from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initialize} from './redux/app_Reducer'
import Loading from './components/Loading/loading';
import {HashRouter} from 'react-router-dom'
import store from './redux/redux-store'
import {Provider} from 'react-redux'
import { LazySuspense } from './components/Hoc/LazySuspence.js';
import ProfileContainer from './components/Profile/profileContainer'
import EditPageContainer from './components/EditPage/EditPageContainer';
import s from "./components/Users/users.scss";


const ChatContainer = React.lazy(() => import('./components/chats/chatsContainer'));

class App extends React.Component {
  
  componentDidMount() {
    this.props.initialize();
  }
  render() {
      if (!this.props.initialized) {
        return <Loading/>
      }
      return (
    <div className="app-wrapper">
    <HeaderContainer/>
    <Nav/>
    <Switch>
    <Route exact path = '/' render = { () => <Redirect to={"/profile"}/>}/>
    <Route path='/friends' render={() => <UsersContainer />}/>
    <Route path = '/profile/:userId?' render={ () => <ProfileContainer/>}/>
    <Route path = '/login' render={ () =>  <LoginPage/>}/>
    <Route path = '/MyAccount' render={ () =>  <EditPageContainer/>}/>
    <Route path='/chats' render = {LazySuspense (ChatContainer)}/>
    <Route path='/VideoCalls' render = {LazySuspense (ChatContainer)}/>
     
     
     
    </Switch>
    <Footer/>
    </div>
      )
    }
  }

  let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer =  compose (
  withRouter,
  connect( mapStateToProps, {initialize}))(App);

const BridesApp = (props) => {
  return <HashRouter>
   <Provider store={store}>
   <AppContainer />
   </Provider>
   </HashRouter>
  }

  export default BridesApp