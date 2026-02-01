import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      {
        id: 1,
        name: "Max",
        email: "max@gmail.com",
      },
      {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com",
      },
      {
        id: 3,
        name: "Marie",
        email: "marie@gmail.com",
      },
      {
        id: 4,
        name: "Alex",
        email: "alex@gmail.com",
      },
    ],
  },
  reducers: {},
});

export default userSlice.reducer;
