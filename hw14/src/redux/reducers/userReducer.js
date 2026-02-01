const initialState = {
  userName: "Mark",
  userStatus: "online",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        userName: action.payload.name,
        userStatus: action.payload.status,
      };
    default:
      return state;
  }
};

export default userReducer;
