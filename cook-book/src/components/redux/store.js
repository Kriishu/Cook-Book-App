import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './slices/querySlice'
import  recipeReducer from './slices/recipeSlice'
import pendingReducer from './slices/pendingSlice'
import urlReducer from './slices/urlSlice'

export const store = configureStore({
    reducer: {
        recipeFilter: queryReducer,
        recipe: recipeReducer,
        pending: pendingReducer,
        url: urlReducer,
    },
})