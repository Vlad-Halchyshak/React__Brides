import { instance, Response, ResultCodeCaptcha, resultCodeT } from './api';

type meResp = {
  id: number;
  email: string;
  login: string
};
  
type LoginResp = {
   userId: number;
 };



export const AuthAPI = {
  me() {
    return instance.get <Response<meResp>>(`auth/me`).then((res) => res.data);
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return (
      instance.post < Response < LoginResp, resultCodeT | ResultCodeCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      }).then((res) => res.data)
    );
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
