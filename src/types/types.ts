export type contactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  website: string
  youtube: string
  mainLink: string
}
export type PhotosType = {
  small: string | null
  large: string | null
}
export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: contactsType
  photos: PhotosType
}

export type UsersType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean

}