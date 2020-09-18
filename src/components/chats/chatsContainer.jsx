import React from 'react';
import chat_girl from "../../images/chat_girl.jpg"
import { chats } from './chats.scss'
import {  actions } from '../../redux/Chats_Reducer';
import Chats from './chats';
import { connect } from 'react-redux';
import { WithRedirect } from '../Hoc/AuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
  return {
    ChatsPage: state.ChatsPage,

  }
}

let mapDispatchToProps = (dispatch) => { 
  return {
    SendMessage: (MyTextMessage) => {
      dispatch(actions.SendMessageAction(MyTextMessage))
    }
  }
}


export default compose(
  WithRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Chats)



