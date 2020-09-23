import React from 'react';
import chat_girl from "../../images/chat_girl.jpg"

import {  actions } from '../../redux/Chats_Reducer';
import Chats from './chats';
import { connect } from 'react-redux';
import { WithRedirect } from '../Hoc/AuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';




let mapStateToProps = (state: AppStateType) => {
  return {
    ChatsPage: state.ChatsPage,

  }
}

let mapDispatchToProps = (dispatch:any) => { 
  return {
    SendMessage: (MyTextMessage:any) => {
      dispatch(actions.SendMessageAction(MyTextMessage))
    }
  }
}


export default compose(
  WithRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Chats)



