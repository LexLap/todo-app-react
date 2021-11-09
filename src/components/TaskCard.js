import React from 'react';
import { deleteTask, removeTaskLocally, updateTask, updateTaskLocally } from '../server/TaskManager';

const TaskCard = (props) => {
    const tasksData = props.tasksData
    const taskID = props.taskData._id
    const statusIsCompleted = props.taskData.statusIsCompleted

    return(
        <div className= {statusIsCompleted?"task-card completed":"task-card"}>
            
            <div className='card-content'>
                {props.taskData.content}
            </div>
            <div className='status-wrapper'>
                <label className='completed-label' htmlFor={taskID}>Completed</label>
                <input
                    id={taskID}
                    checked={statusIsCompleted}
                    type='checkbox'
                    onChange={()=>{
                        updateTask(taskID).then((result)=>{
                            if(result){
                                props.setTasksData(
                                    updateTaskLocally(tasksData, taskID)
                                )
                            }
                        })
                    }}
                >
                </input>
            </div>
            <div className='delete-task-button'
                onClick={()=>{
                    deleteTask(taskID).then((result)=>{
                        if(result){
                            props.setTasksData(
                                removeTaskLocally(tasksData, taskID)
                            )
                        }
                    })
                }}
            >
                Delete
            </div>
        </div>
    );
};

export default TaskCard;