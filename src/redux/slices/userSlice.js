import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    email: "",
    name: "",
  },
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { email, name, token } = action.payload;
      state.isAuthenticated = true;
      state.user = {
        email: email ?? "",
        name: name ?? (email ? String(email).split("@")[0] : ""),
      };
      state.token = token ?? "demo-token";
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = { email: "", name: "" };
      state.token = "";
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
