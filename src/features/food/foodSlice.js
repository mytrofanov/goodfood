import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {foodAPI} from "../../Api/Api";

export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        food: [],
    },
    // reducers: {
    //     fetchFood: (state, action) => {
    //         state.food += action.payload
    //     },
    // },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchFoodFromServer.fulfilled, (state, action) => {
            // Add user to the state array
            state.food.push(action.payload)
        })
    },
})

export const { fetchFood } = foodSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const fetchFoodFromServer = createAsyncThunk(
    'food/fetchFood',
    async () => {
        const response = await foodAPI.eatable()
        console.log('Thunk data: ', response)
        return response
    }
)

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectFood = (state) => state.foodStore.food

export default foodSlice.reducer
