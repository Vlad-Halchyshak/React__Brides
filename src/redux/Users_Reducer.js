import { usersAPI } from "../api/api";
import { updateObjArr } from "../components/Users/object-helpers";



const initialState = {
 users: [],
 totalUsersCount: 0,
 PageSize: 8,
 currentPage: 1,
 isLoading: true,
 toggleFollowing: []
}



const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Follow":
      return {
        ...state,
        users: updateObjArr(state.users, action.userId, "id", {
          followed: true
        })
      }

      case "Unfollow":
        return {
          ...state,
          users: updateObjArr(state.users, action.userId, "id", {
            followed: false
          })
        }

        case "Set_user": {
          return {
            ...state,
            users: action.users
          }
        }
        case "Set_current_page": {
          return {
            ...state,
            currentPage: action.currentPage
          }
        }
        case "Set_total_users": {
          return {
            ...state,
            totalUsersCount: action.totalCount
          }
        }

        case "Is_Loading": {
          return {
            ...state,
            isLoading: action.Loading
          }
        }
        case "Toggle_is_Following": {
          return {
            ...state,
            toggleFollowing: action.Loading ? [...state.toggleFollowing, action.userId] : state.toggleFollowing.filter(id => id != action.userId)
          }
        }

        default:
          return state
  }
}

export const follow = (userId) => ({
  type: "Follow",
  userId
})
export const unfollow = (userId) => ({
  type: "Unfollow",
  userId
})
export const setUsers = (users) => ({
  type: "Set_user",
  users
})
export const setCurrentPage = (currentPage) => ({
  type: "Set_current_page",
  currentPage
})
export const setTotalUsers = (totalCount) => ({
  type: "Set_total_users",
  totalCount
})
export const thisLoading = (Loading) => ({
  type: "Is_Loading",
  Loading
})
export const toggleIsFollowing = (following, userId) => ({
  type: "Toggle_is_Following",
  following
})

export const getUsers = (currentPage, PageSize) => {
  return async (dispatch) => {
    dispatch(thisLoading(true));
    let data = await usersAPI.getUsers(currentPage, PageSize)
    dispatch(thisLoading(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsers(data.totalCount));
  }
}

const ForFollowUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowing(true, userId));
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowing(false, userId));
}


export const followThunk = (userId) => {
  return async (dispatch) => {
    ForFollowUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow)
  }
}

export const unfollowThunk = (userId) => {
  return async (dispatch) => {
    ForFollowUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollow)
  }
}
export default UsersReducer