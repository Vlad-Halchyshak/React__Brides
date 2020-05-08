import { createSelector } from "reselect"
const getUsers = (state) => {
  return state.usersPage.users
}

export const gainUsers = createSelector(getUsers, (users) => {
  return users.filter(u => true)
})

export const gainTotalUserCount = (state) => {
  return state.usersPage.totalUsersCount
}
export const gainPageSize = (state) => {
  return state.usersPage.PageSize
}
export const gainCurrentPage = (state) => {
  return state.usersPage.currentPage
}
export const gainIsLoading = (state) => {
  return state.usersPage.isLoading
}
export const gainToggleFollowing = (state) => {
  return state.usersPage.toggleFollowing
}