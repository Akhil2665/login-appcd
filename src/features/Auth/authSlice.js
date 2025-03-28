import { createSlice } from "@reduxjs/toolkit";


const users = [
  { username: "Akhil", password: "Akhil@123" },
  { username: "Chinna", password: "chinna@123" },
];
// const userEmails = [
//   {email: 'akhilpappu8@gmail.com'},
//   {email: 'akhileee.16@gmail.com'},
// ]

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userEmail: null,
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
    emailSignIn: (state, action) => {
      const { email } = action.payload ;
      debugger

      if(email){
        debugger
        state.userEmail = { email: email };
        state.user =  { email: email };
        state.isAuthenticated = true;
        state.errMsg = null;
      }         
    },
    logout: (state) => {
      state.user = null ;
      state.isAuthenticated = false;
      state.errMsg = null;
    },
  },
});

export const  {login, logout, emailSignIn } = authSlice.actions
export default authSlice.reducer