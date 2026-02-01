const initialState = {
  users: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Maria" },
    { id: 3, name: "John" },
    { id: 4, name: "Anna" },
  ],
  filter: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
