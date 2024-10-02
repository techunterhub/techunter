"use client";

import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from './slices/CounterSlice'
import { blogSlice } from "./slices/BlogsSlice";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        blogs: blogSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;