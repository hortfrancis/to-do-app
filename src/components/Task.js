import React, { useEffect } from 'react';

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { removeTask, editTask } from '../store/taskListSlice';

export default function Task(props) {

    // Determines whether to show the edit form or not
    const [isEditing, setIsEditing] = useState(false);

    // Automatically populates the edit form with the current description from the store
    const [description, setDescription] = useState(props.task.description);

    const dispatch = useDispatch();

    /* Event handlers for buttons */

    // Also used when user clicks on the task description
    function handleEdit() {
        setIsEditing(true);
    }

    function handleEditFormSubmit(event) {
        event.preventDefault();
        setIsEditing(false);
        dispatch(editTask(
            {
                id: props.task.id,
                description: description,
                completed: false
            }
        ));
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleDoneButton() {
        if (props.task.completed === false) {
            dispatch(editTask(
                {
                    id: props.task.id,
                    description: description,
                    completed: true
                }
            ));
        } else {
            dispatch(editTask(
                {
                    id: props.task.id,
                    description: description,
                    completed: false
                }
            ));
        }
    }

    function handleDeleteButton() {
        // Need to use window.confirm to avoid 'no-restricted-globals' error
        if (window.confirm("Delete this task? Are you sure?")) {
            dispatch(removeTask(props.task.id));
        }
    }

    useEffect(() => {
        setDescription(props.task.description);
    }, [props.task.description]);


    return (

        <div className="Task">

            <div className="task-container">

                {/* Using conditional rendering with a ternary */}
                {isEditing ? (

                    <form className="edit-form" onSubmit={handleEditFormSubmit} autocomplete="off">

                        <input type="text" class="edit-description-input" value={description} onChange={handleDescriptionChange} />
                        <button type="submit" className="save-button">Save</button>

                    </form>

                ) : (

                    <div>
                        <span className={`description ${props.task.completed ? 'completed' : ''}`} onClick={handleEdit}>{description}</span>
                        <button type="button" className="edit-button" onClick={handleEdit}>Edit</button>
                        <button type="button" className="delete-button" onClick={handleDeleteButton}>Delete</button>
                        <button type="button" className="done-button" onClick={handleDoneButton}>Done!</button>

                    </div>
                )}

            </div>
            
        </div>
    );
}