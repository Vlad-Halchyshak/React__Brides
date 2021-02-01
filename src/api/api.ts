import { UsersType } from './../types/types';
import  axios from 'axios'
/* нуы */

export const instance = axios.create ({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "0c968d01-79de-4cb2-8c41-cae2bbd2fa3e"
  }
})


export type Response<D = {}, RC = resultCodeT> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};


export type getItems = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}



export enum resultCodeT {
  Success = 0,
  Error = 1,
  
}

export enum ResultCodeCaptcha {
  captcha = 10
}



