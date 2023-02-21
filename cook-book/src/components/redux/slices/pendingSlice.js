import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pending: false,
}

export const pendingSlice = createSlice({
    name: 'isPending',
    initialState,
    reducers: {
        setPending: (state, action) => {
            state.query = action.payload
        }
    }
})

export const { setPending } = pendingSlice.actions

export default pendingSlice.reducer