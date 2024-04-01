import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchAllUserResponse } from "../../config/DataTypes.config";
import { ALLUSERS } from "../api/Api";

export const getAllUser = createAsyncThunk("/alluser", async ({ payload }: any, { rejectWithValue }): Promise<FetchAllUserResponse | any> => {
    try {
        const response = await ALLUSERS();
        const result: FetchAllUserResponse = response?.data;
        if (result?.success) {
            return result;
        }
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});


const OtherSlice = createSlice({
    name: "otherSlice",
    initialState: {
        all_user_data: [],
        loading: false,
        error: null
    },
    reducers: {
        clearUserData(state) {
            state.all_user_data = [];
        },
    },
    extraReducers: builder => {
        builder.addCase(getAllUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            const all_user_data: any = payload;
            state.all_user_data = all_user_data;
        })
        builder.addCase(getAllUser.rejected, (state, { payload }) => {
            state.loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const { clearUserData } = OtherSlice.actions;
export default OtherSlice.reducer;