import React, { useState } from 'react';
import { createTask } from '../server/TaskManager'

const NewTaskModal = (props) => {
    const [textAreaTempInput, setTextAreaTempInput] = useState('')

    return(
        <div id='new-task-modal-container'>
            <div id='new-task-modal-screen'>
                <div id='text-area-wrapper'>
                    <textarea
                        id='new-task-text'
                        placeholder = 'Enter task content here'
                        value={textAreaTempInput}
                        onChange={(event)=>{
                            setTextAreaTempInput(event.target.value)
                        }}
                    ></textarea>
                </div>
                <div id='create-button'
                    onClick={()=>{
                        createTask(textAreaTempInput).then((data)=>{
                            props.setInitStart(true)
                            props.setNewTaskMode(false)
                        })
                    }}
                >
                    Create
                </div>
            </div>
        </div>
    );
};

export default NewTaskModal;