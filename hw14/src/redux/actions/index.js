export const setUserInfo = (newInfo) => {
  return {
    type: "SET_USER_INFO",
    payload: newInfo,
  };
};
