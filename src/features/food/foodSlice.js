import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {foodAPI} from "../../Api/Api";

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        food: [],
        cheapestFoodId: null
    },
    reducers: {
        setCheapestFood: (state, action) => {
            state.cheapestFood = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoodFromServer.fulfilled, (state, action) => {
            state.food = action.payload
        })
    },
})

export const { setCheapestFood } = foodSlice.actions


export const fetchFoodFromServer = createAsyncThunk(
    'food/fetchFood',
    async () => {
        const response = await foodAPI.eatable()
        return response
    }
)

export default foodSlice.reducer
