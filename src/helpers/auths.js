import Cookies from 'js-cookie'
export const userToken = Cookies.get("userToken");

export const validAdmin = () => {
  const userToken = Cookies.get("userToken");
  console.log(userToken);
  
  if (userToken) {
    return true;
  }
  return false;
};
