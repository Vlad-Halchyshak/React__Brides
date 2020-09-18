import { AppStateType, ActionTypes,  BaseThunk } from './redux-store';
/* import { setCurrentPage } from './Users_Reducer'; */
import { PhotosType, UsersType } from './../types/types';
import { usersAPI } from "../api/usersAPI";
import { updateObjArr } from "../components/Users/object-helpers";
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';


const initialState = {
users: [] as Array<UsersType>,
 totalUsersCount: 0,
 PageSize: 8,
 currentPage: 1,
 isLoading: true,
toggleFollowing: [] as Array<number> // array of  users id 
 
}



const UsersReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case "Follow":
      return {
        ...state,
        users: updateObjArr(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case "Unfollow":
      return {
        ...state,
        users: updateObjArr(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case "Set_user": {
      return {
        ...state,
        users: action.users,
      };
    }
    case "Set_current_page": {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case "Set_total_users": {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }

    case "Is_Loading": {
      return {
        ...state,
        isLoading: action.Loading,
      };
    }
    case "Toggle_is_Following": {
      return {
        ...state, //@ts-ignore
        toggleFollowing: action.Loading
          ? [...state.toggleFollowing, action.userId]
          : state.toggleFollowing.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
}

type action =  ActionTypes<typeof actions>

const actions = {
 follow:  (userId: number) => ({type: "Follow", userId}  as const),
 unfollow:  (userId: number) => ({type: "Unfollow",userId} as const),
 setUsers:  (users: Array<UsersType>) => ({type: "Set_user",users} as const),
 setCurrentPage:  (currentPage: number) => ({type: "Set_current_page",currentPage} as const),
 setTotalUsers:  (totalCount: number) => ({type: "Set_total_users",totalCount} as const),
 thisLoading:  (Loading: boolean) => ({ type: "Is_Loading", Loading } as const),
 toggleIsFollowing:  (following: boolean, userId: number) => ({ type: "Toggle_is_Following", following, userId } as const)
}



type Thunk = BaseThunk<action>

export const getUsers = (currentPage: number, PageSize: number): Thunk => {
  return async (dispatch: Dispatch<action>) => {
    dispatch(actions.thisLoading(true));
    let data = await usersAPI.getUsers(currentPage, PageSize);
    dispatch(actions.thisLoading(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsers(data.totalCount));
  };
}

const _ForFollowUnfollow = async (dispatch: Dispatch<action>, userId:number, apiMethod:any, actionCreator:(userId: number) => action) => {
  dispatch(actions.toggleIsFollowing(true, userId));
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleIsFollowing(false, userId));
}


export const followThunk = (userId:number): Thunk => {
  return async (dispatch) => {
    _ForFollowUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.follow)
  }
}

export const unfollowThunk = (userId:number): Thunk => {
  return async (dispatch) => {
    _ForFollowUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollow)
  }
}
export default UsersReducer