import {getUserToken} from "./localStorer";

export const validAdmin = () => {
  const userToken = getUserToken();
  return !!userToken;
};
