import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN, REGISTER } from "../api/Api";
import { LoginSuccessResponse, RegisterSuccessResponse, UserAuth_Props } from "../../config/DataTypes.config";
import { EncryptData } from "../../utility/EncryptDecrypt";

export const LoginUser = createAsyncThunk("/usersignin", async ({ data, navigate }: UserAuth_Props, { rejectWithValue }): Promise<LoginSuccessResponse | any> => {
    try {
        const response = await LOGIN(data);
        const result: LoginSuccessResponse = response?.data;
        if (result?.success) {
            const user = EncryptData(result?.data);
            window.localStorage.setItem("token", JSON.stringify(result?.token));
            window.localStorage.setItem("user", user);
            navigate("/home");
            return result;
        }
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

export const RegisterUser = createAsyncThunk("/adduser", async ({ data, navigate }: UserAuth_Props, { rejectWithValue }): Promise<RegisterSuccessResponse | any> => {
    try {
        const response = await REGISTER(data);
        const result: RegisterSuccessResponse = response?.data;
        if (result?.success) {
            navigate("/login");
            return result;
        }
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});


const AuthSlice = createSlice({
    name: "authSlice",
    initialState: {
        user_data: [],
        loading: false,
        error: null
    },
    reducers: {
        LogoutUser(state, { payload }) {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
            state.user_data = [];
            payload('/login');
        },
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(LoginUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(LoginUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            const user_data: any = payload;
            state.user_data = user_data;
        })
        builder.addCase(LoginUser.rejected, (state, { payload }) => {
            state.loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        builder.addCase(RegisterUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(RegisterUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            const user_data: any = payload;
            state.user_data = user_data;
        })
        builder.addCase(RegisterUser.rejected, (state, { payload }) => {
            state.loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const { LogoutUser, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;