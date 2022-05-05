import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../features/food/foodSlice'

export default configureStore({
    reducer: {
        foodStore: foodReducer
    },
});
