import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getRecipes = createAsyncThunk("recipes/getRecipes", async () => {
    return fetch ("http://localhost:3000/recipes/").then((res) =>
        res.json()
    )
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.loading = false
                state.recipes = action.payload
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default recipeSlice.reducer