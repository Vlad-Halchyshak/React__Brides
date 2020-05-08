import {AuthAPI} from '../api/api'
import {stopSubmit} from "redux-form"
import { getAuthThunk } from "./Auth_Reducer"



let initialState = {
  initialized: false
}


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Initialize":
      return {
        ...state,
        initialized: true
      }
      default:
        return state
  }
}

export let initializedSuccess = () => ({
  type: "Initialize"
})

export let initialize = () => (dispatch) => {
  let promise = dispatch(getAuthThunk())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}




export default appReducer