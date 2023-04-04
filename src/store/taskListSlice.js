import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({

    name: 'taskList',

    initialState: {
        nextId: 2,
        list: [
            { id: 1, 
              description: 'Learn React', 
              completed: false 
            },
        ]
    }, 

    reducers: {

        addTask: (state, action) => {
            console.log('in addTask action');
            console.log(action.payload);
            state.list.push(
                { 
                    id: state.nextId, 
                    description: action.payload.description,
                    completed: false
                });
            state.nextId++;

        }, 

        removeTask: (state, action) => {
            state.list = state.list.filter((task) => task.id !== action.payload);
        }, 

        // Rather than editing a specific field, a new task object is passed in
        editTask: (state, action) => {
            state.list = state.list.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }
                return task;
            });
        }
    }
});

export const { addTask, removeTask, editTask } = taskListSlice.actions;

export default taskListSlice.reducer;