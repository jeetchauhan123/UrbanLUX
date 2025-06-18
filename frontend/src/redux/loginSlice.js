import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated:
        localStorage.getItem("isAuthenticated") === "true" ? true : false,
    // user: localStorage.getItem("user")
    //     ? JSON.parse(localStorage.getItem("user"))
    //     : null,
};

export const loginSlice = createSlice({
    name: "UserData",
    initialState,
    reducers: {
        isLogin: (state) => {
            state.isAuthenticated = true;
            localStorage.setItem("isAuthenticated", "true");
            // localStorage.setItem("user", JSON.stringify(action.payload));
            console.log("User is logged in");
        },
        isSignin: (state) => {
            state.value = !state.value;
            console.log(state.value);
        },
        isLogout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem("isAuthenticated");
            localStorage.removeItem("user");
        },
    },
});

// Action creators are generated for each case reducer function
export const { isLogin, isSignin, isLogout } = loginSlice.actions;

export default loginSlice.reducer;
