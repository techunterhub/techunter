"use client";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://rss-feed-rose.vercel.app/api/rss");
            if(response.status !== 200) return rejectWithValue(response.data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default blogSlice.reducer;
