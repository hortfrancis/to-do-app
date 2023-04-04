import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from './taskListSlice';

export default configureStore({
    reducer: {
        taskList: taskListReducer,
    }
});