import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
}

export const querySlice = createSlice({
    name: 'recipeFilter',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        }
    }
})

export const { setQuery } = querySlice.actions

export default querySlice.reducer