import { ActionTypes, BaseThunk } from './redux-store';
import { ProfileType, PhotosType } from './../types/types';
import { initialize } from './app_Reducer';
import { profileAPI } from "../api/profileAPI";
import { stopSubmit, FormAction } from "redux-form"





let initialState = {
  profile: null as ProfileType | null,
  status: ""
}



export type initialStateType = typeof initialState


let ProfileReducer = (state = initialState, action: Action): initialStateType => {
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
        profile: {...state.profile, photos: action.photos} as ProfileType}
      }
    
      default:
        return state
  }
}


type Action = ActionTypes<typeof actions>


const actions = {
  setUsersProfile: (profile: ProfileType) => ({ type: "Set_Users_Profile", profile } as const),
  setStatus: (status: string) => ({ type: "Set_Status", status } as const),
  setPhoto: (photos: PhotosType) => ({ type: "Set_Photo", photos } as const)

}






type Thunk = BaseThunk<Action | FormAction>

export const getUsersProfile = (userId:number): Thunk => async (dispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(actions.setUsersProfile(data));
}

export const getStatus = (userId:number): Thunk => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(data));
}

export const updateStatus = (status:string): Thunk => async(dispatch) => {
  let data = await profileAPI.updateStatus(status)
    if(data.resultCode === 0) {
    dispatch(actions.setStatus(status));}
  }

  export const savePhoto = (file: File): Thunk => async(dispatch) => {
  let data = await profileAPI.savePhoto(file)
    if(data.resultCode === 0) {
    dispatch(actions.setPhoto(data.data.photos));}
  }
  
  export const saveProfile = (profile:ProfileType): Thunk => async(dispatch, getState) => {
    const userId = getState().auth.userId
   let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
      if (userId != null) {
        dispatch(getUsersProfile(userId));
      } else {
        throw new Error("user can't be null")
      }
    } else {
      dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
      return Promise.reject(data.messages[0])
  }
}

export default ProfileReducer