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
      debugger

      if(username){
        debugger
        state.user = { username: username };
        state.isAuthenticated = true;
        state.errMsg = null;
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