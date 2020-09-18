/* import { AppStateType } from './redux-store'; */
import { createStore, combineReducers, compose, applyMiddleware, Action } from "redux";
import ChatsPage from './Chats_Reducer'
import UsersReducer from "./Users_Reducer";
import ProfileReducer from "./Profile_Reducer";
import authReducer from "./Auth_Reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app_Reducer";



let rootReducer = combineReducers ({
  ChatsPage: ChatsPage,
  usersPage: UsersReducer,
  ProfilePage: ProfileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType> 

 type properties<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<properties<T>>

export type BaseThunk<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.store = store


export default store