import { createSlice } from "@reduxjs/toolkit";

const users = [
  { username: "Akhil", password: "Akhil@123" },
  { username: "Chinna", password: "chinna@123" },
];

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    errMsg: "null",
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload ;
      const user = users.find(
        (eachUser) =>
          eachUser.username === username && eachUser.password === password 
      );
      if (user) {
        state.user = { username: user.username };
        state.isAuthenticated = true;
        state.errMsg = null;
      } else {
        state.isAuthenticated = false;
        state.errMsg = "Invalid username or password";
      }
    },
    logout: (state, action) => {
      state.user = null ;
      state.isAuthenticated = false;
      state.errMsg = null;
    },
  },
});

export const  {login, logout } = authSlice.actions
export default authSlice.reducer