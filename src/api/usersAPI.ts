import { profileAPI } from './profileAPI';
import { instance, getItems, Response } from './api';
import { AxiosPromise } from 'axios';

export const usersAPI = {
  getUsers(currentPage = 1, PageSize = 10) {
    return instance
      .get<getItems>(`users?page=${currentPage}&count=${PageSize}`)
      .then((response) => {
        return response.data
      });
  },

  follow(userId: number) {
    return instance.post<Response>(`follow/${userId}`)
      .then(res => res.data);
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res=>res.data) as Promise<Response>;

  },
  getProfile(userId: number) {
    console.warn('Obselete method');
    return profileAPI.getProfile(userId);
  }
};
