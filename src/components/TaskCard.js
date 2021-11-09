import React from 'react';
import { deleteTask, updateTask } from '../server/TaskManager';

const TaskCard = (props) => {
    const taskID = props.taskData._id
    const statusIsCompleted = props.taskData.statusIsCompleted

    return(
        <div className= {statusIsCompleted?"task-card completed":"task-card"}>
            
            <div className='card-content'>
                {props.taskData.content}
            </div>
            <div>
                Completed
                <input
                    checked={statusIsCompleted}
                    type='checkbox'
                    onChange={()=>{
                        updateTask(taskID).then(()=>{
                            props.setInitStart(true)
                        })
                    }}
                >
                </input>
            </div>
            <div className='delete-task-button'
                onClick={()=>{
                    deleteTask(taskID).then(()=>{
                        props.setInitStart(true)
                    })
                }}
            >
                Delete
            </div>
        </div>
    );
};

export default TaskCard;