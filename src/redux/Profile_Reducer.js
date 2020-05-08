import { usersAPI, profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"


let initialState = {
  profile: null,
  status: ""
}


let ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Set_Users_Profile":
      return {
        ...state, profile: action.profile
      }
    case "Set_Status": {
      return {
        ...state,
        status: action.status
      }
    }
    case "Set_Photo": {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}}
      }
    
      default:
        return state
  }
}


export let setUsersProfile = (profile) => ({ type: "Set_Users_Profile", profile})
export let setStatus = (status) => ({ type: "Set_Status", status})
export let setPhoto = (photos) => ({ type: "Set_Photo", photos})

export let getUsersProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUsersProfile(response.data))
}

export let getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export let updateStatus = (status) => async(dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
    dispatch(setStatus(status))}
  }

  export let savePhoto = (file) => async(dispatch) => {
  let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos))}
  }
  
  export const saveProfile = (profile) => async(dispatch, getState) => {
    const userId = getState().auth.userId
  let response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
    dispatch(getUsersProfile(userId))
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }))
    return Promise.reject(response.data.messages[0])
  }
}

export default ProfileReducer