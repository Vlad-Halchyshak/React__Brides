import React, { useEffect, useState } from 'react'
import chat_girl from '../../images/chat_girl.jpg'

import { NavLink} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

/* type props = {
  id: number
  name: string
  age: number
  city: string
  message: string
} */
const wsChannel = new WebSocket(
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
)

 const Chat = () => {
  return (
    <div>
      <ChatMessages />
      <AddMessageForm />
    </div>
  )
}
const ChatMessages = () => {
  const [messages, setMessages] = useState([])
 
  useEffect(() => {
    wsChannel.addEventListener('message', (e) => {
      let newMessage = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessage])
      
    })
    
  }, [])
  
  return <div>
      {messages.map((m, index) => <Message key={index} message={m} />)}
    </div>
  
}

const Message = ({ message }) => {
  console.log(message)
  return <div>
      {/* <img src={message.photo} /> 
      <b>{message.userName}</b> */}
      {message.message}
    </div>
  
}

const AddMessageForm = () => {
  const [message, setMessage] = useState('')
  const sendMessage = () => {
    if (message === '') {
      return
    }
    wsChannel.send(message)
    setMessage('')
  }
  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
/* const ChatItem = (props) => {
  return (
    <NavLink to={'/chats/' + props.id}>
      <li className="item-girl">
        <h3 item-girl-name>{props.name}</h3>
        <span className="item-girl-from">
          {props.age} years, from {props.city}
        </span>
      </li>
    </NavLink>
  )
}
 */
/* const ChatMessage = (props) => {
  return (
    <div>
      <h1 className="title-dialog-item">
        {props.name}
        <span className="title-dialog-wrote"> wrote</span>
        <span className="title-dialog-time">11:25</span>
      </h1>
      <div className="chat-text">
        {' '}
        <p>{props.message}</p>
      </div>
    </div>
  )
} */

/* const MyMessage = (props) => {
  return (
    <div>
      <h1 className="title-my-dialog">
        Vito
        <span className="title-my-wrote">wrote</span>
        <span className="title-my-time">11:25</span>
      </h1>
      <div className="chat-my-text">
        <p>{props.message}</p>
      </div>
    </div>
  )
} */

/* const Chatss = (props) => {
  let state = props.ChatsPage
  //@ts-ignore
  let MyMessageElement = state.MyMessages.map((my) => (
    <MyMessage name={my.name} key={my.id} id={my.id} message={my.message} />
  ))
  //@ts-ignore
  let ChatMessageDataElement = state.ChatMessages.map((dialog) => (
    <ChatMessage
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
      message={dialog.message}
    />
  ))
  //@ts-ignore
  let ChatDataElements = state.ChatItems.map((chat) => (
    <ChatItem
      name={chat.name}
      key={chat.id}
      id={chat.id}
      age={chat.age}
      city={chat.city}
    />
  ))

  let OnSendMessage = (values) => {
    props.SendMessage(values.MyTextMessage)
  }

  return (
    <div className="Chat">
      <div className="Chat-Container">
        <input type="text" placeholder="Search" />
        <ul className="Girl-list">{ChatDataElements}</ul>
      </div>
      <div className="dialogs">
        {ChatMessageDataElement}
        {MyMessageElement}
        <SendMessageRx onSubmit={OnSendMessage} />
      </div>
      <div className="profile-photo">
        <h3>Tanya</h3>
        <a href="#0">View Profile</a>
      </div>
    </div>
  )
} */

/* const SendMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="MyTextMessage"
          component="textarea"
          placeholder="type here"
        />
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
} */
/* const SendMessageRx = reduxForm({ form: 'MyTextMessage' })(SendMessageForm) */


export default Chat