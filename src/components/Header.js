import React from 'react';

const Header = (props) => {
    
    return(
        <div id="header-container">
            <div>
                <h3>active tasks: {props.activeTasksCounter}</h3>
            </div>

            <div>
                <h1>My TODO List</h1>
            </div>

            <div id="new-task-button-container"
                onClick={()=>props.setNewTaskMode(true)}
            >
                <div>Create Task</div>
             </div>


        </div>
    );
};

export default Header;