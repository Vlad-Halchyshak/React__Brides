import { AppStateType } from '../redux/redux-store';
/* import { AppStateType } from "../redux/redux-store"; */
import { createSelector } from "reselect"

const getUsers = (state: AppStateType) => {
  return state.usersPage.users
}

export const gainUsers = createSelector(getUsers, (users) => {
  //@ts-ignore
  return users.filter (u => true) 
})

export const gainTotalUserCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};
export const gainPageSize = (state: AppStateType) => {
  return state.usersPage.PageSize;
};
export const gainCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
export const gainIsLoading = (state: AppStateType) => {
  return state.usersPage.isLoading;
};
export const gainToggleFollowing = (state: AppStateType) => {
  return state.usersPage.toggleFollowing;
};
export const getUsersFilter = (state: AppStateType) => {
  return state.usersPage.filter;
};