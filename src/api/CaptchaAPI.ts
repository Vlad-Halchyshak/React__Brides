import { instance } from './api';

type captchaUrl = {
  url: string
}

export const CaptchaAPI = {
  getCaptcha() {
    return instance
      .get<captchaUrl>(`security/get-captcha-url`)
      .then((res) => res.data);
  },
};
