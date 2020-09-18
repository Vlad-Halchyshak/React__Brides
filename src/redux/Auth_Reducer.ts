import { ActionTypes, BaseThunk } from './redux-store';
import {  ResultCodeCaptcha, resultCodeT } from './../api/api';
import { CaptchaAPI } from "../api/CaptchaAPI";
import { AuthAPI } from "../api/AuthAPI";
import { stopSubmit, FormAction } from "redux-form"





let initialState = {
  userId: null as (number | null),
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captcha: null as string | null
}
export type initialStateType = typeof initialState
type Actions = ActionTypes<typeof actions>
type Thunk = BaseThunk<Actions | FormAction>

const authReducer = (state = initialState, action: Actions): initialStateType => {
  switch (action.type) {
    case "Set_Auth":
    case "Get_CAPTCHA":
      return {
       
        ...state,
        ...action.payload
      }
      default:
        return state
  }
}

/* type setAuthActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean 
} */



const actions = {
setAuthAction: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: "Set_Auth",payload: {userId,email,login,isAuth} as const}),
  
  getCaptcha: (captcha: string) => ({
    type: "Get_CAPTCHA", payload: { captcha } as const
})
}




 


export let getAuthThunk = (): Thunk => async (dispatch) => {
  let meData = await AuthAPI.me();
  if (meData.resultCode === 0) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthAction(id, email, login, true));
  }
};


export const login = (email: string , password: string, rememberMe: boolean, captcha:string) => async (dispatch: any) => {
  let data = await AuthAPI.login(email, password, rememberMe, captcha)
  
  if (data.resultCode === resultCodeT.Success) {
    dispatch(getAuthThunk())
  } else {
    if (data.resultCode === ResultCodeCaptcha.captcha) {
      dispatch(setCaptcha())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some error"
    dispatch(stopSubmit("login", {
      _error: message
    }))
  }
}

export const setCaptcha = (): Thunk => async (dispatch) => {
  let data = await CaptchaAPI.getCaptcha()
  let captcha = data.url;
  dispatch(actions.getCaptcha(captcha));
}


export const logout = () => async (dispatch: any) => {
  let response = await AuthAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthAction(null, null, null, false))
  }
}




export default authReducer