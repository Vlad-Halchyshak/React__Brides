import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ChatsPage from './Chats_Reducer'
import UsersReducer from "./Users_Reducer";
import ProfileReducer from "./Profile_Reducer";
import authReducer from "./Auth_Reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app_Reducer";



let reducers = combineReducers ({
  ChatsPage: ChatsPage,
  usersPage: UsersReducer,
  ProfilePage: ProfileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store


export default store