import cookies from "js-cookie";

export const userToken = cookies.get("token");

export const validAdmin = () => {
  const userToken = cookies.get("token");

  if (userToken) {
    return true;
  }
  return true;
};
