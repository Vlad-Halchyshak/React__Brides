import { AuthAPI, CaptchaAPI } from "../api/api"
import { stopSubmit } from "redux-form"



let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null
}


const authReducer = (state = initialState, action) => {
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


export let setAuthAction = (userId, email, login, isAuth) => ({
  type: "Set_Auth",
  payload: {
    userId,
    email,
    login,
    isAuth
  }
})
export let getCaptcha = (captcha) => ({
  type: "Get_CAPTCHA",
  payload: {
    captcha
  }
})


export let getAuthThunk = () => async (dispatch) => {
  let response = await AuthAPI.me()
  if (response.data.resultCode === 0) {
    let {
      id,
      login,
      email
    } = response.data.data;
    dispatch(setAuthAction(id, email, login, true))
  }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await AuthAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getAuthThunk())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(setCaptcha())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
    dispatch(stopSubmit("login", {
      _error: message
    }))
  }
}

export const setCaptcha = () => async (dispatch) => {
  let response = await CaptchaAPI.getCaptcha()
  let captcha = response.data.url;
  dispatch(getCaptcha(captcha))
}


export const logout = () => async (dispatch) => {
  let response = await AuthAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthAction(null, null, null, false))
  }
}




export default authReducer