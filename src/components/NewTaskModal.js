import React, { useState } from 'react';
import { createTask } from '../server/TaskManager'

const NewTaskModal = (props) => {
    const [textAreaTempInput, setTextAreaTempInput] = useState('')

    return(
        <div id='new-task-modal-container'
            onClick={ (event)=> {
                if(event.target.id==='new-task-modal-container')
                    props.setNewTaskMode(false)
            }}
        >
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
                <div id='new-task-button-container'
                    onClick={()=>{
                        createTask(textAreaTempInput).then((data)=>{
                            if(data){
                                props.tasksData.push(data)
                                props.setTasksData(props.tasksData)
                            }
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