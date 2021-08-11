import { getCookie } from "./cookie";

export const checkIsAuth = () => {
  const authToken = getCookie("auth_token");
  if (authToken) {
    return true;
  }
  return false;
};
