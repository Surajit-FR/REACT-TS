import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import OtherSlices from "../slices/OtherSlices";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice,
        otherSlice: OtherSlices,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false })
});