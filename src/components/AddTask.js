import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskListSlice';

export default function AddTask() {

    const dispatch = useDispatch();

    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Input validation: don't add a task if the description is empty
        if (description !== '') {

            // Using 'object property shorthand' syntax
            dispatch(addTask({ description, completed: false }));
            setDescription('');
        } else {
            alert('Please enter a task description');
        }
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    return (
        <form id="add-task-form" onSubmit={handleSubmit} autocomplete="off">
            <label htmlFor="newTaskDescription">Add a new task:</label>
            <input id="newTaskDescription" 
                type="text" value={description} 
                onChange={handleDescriptionChange} 
                placeholder="Learn Redux.js, etc" />
            <button type="submit" id="add-task-button">Add Task</button>
        </form>
    )
}
