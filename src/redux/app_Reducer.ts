import { ActionTypes } from './redux-store';
/* import { initialize, initializedSuccess } from './app_Reducer'; */
import { AuthAPI } from "../api/AuthAPI"
import {stopSubmit} from "redux-form"
import { getAuthThunk } from "./Auth_Reducer"





let initialState = {
  initialized: false
}
export type initialState = typeof initialState
type Action = ActionTypes<typeof actions>;

const appReducer = (state = initialState, action: Action): initialState => {
  switch (action.type) {
    case "Initialize":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};



const actions = {
  initializedSuccess: () => ({ type: "Initialize" }),
};



export const initialize = () => (dispatch: any ) => {
  let promise = dispatch(getAuthThunk())
  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess())
  })
}




export default appReducer