import { ProfileType, PhotosType } from './../types/types';
import { instance, Response } from './api';

type Savephoto = {
  photos: PhotosType
}


export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/` + userId).then(res => res.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId).then(res => res.data);
  },
  updateStatus(status: string) {
    return instance.put<Response>(`profile/status/`, {
      status: status
    }).then(res => res.data);
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<Response<Savephoto>>(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => res.data);
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile).then(res => res.data);
  }
}
