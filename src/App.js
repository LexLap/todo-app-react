import { useState } from "react";
import Header from "./components/Header";
import NewTaskModal from "./components/NewTaskModal";
import TaskCard from "./components/TaskCard";
import { countActiveTasks, getTasks } from "./server/TaskManager";

function App() {
  const [ newTaskMode, setNewTaskMode ] = useState(false)
  const [ tasksData, setTasksData ] = useState([])
  const [ initStart, setInitStart ] = useState(true)
  
  const activeTasksCounter = countActiveTasks(tasksData)

  if(initStart)getTasks()
      .then(data => {
        setInitStart(false)
        setTasksData(data);
      });

  let tasksContent = <div></div>
  if(tasksData.length > 0){
    tasksContent = 
    tasksData.map((taskData, i)=>{
      return <TaskCard key={i} className='task-wrapper' setInitStart={setInitStart} taskData={taskData}/>
  })}
  
  return (
    <div id="app-container">
      <Header setNewTaskMode={setNewTaskMode} activeTasksCounter={activeTasksCounter}/>

      <div id='tasks-container'>
        {tasksContent}
      </div>

      {
        !!newTaskMode&&
        <NewTaskModal setInitStart={setInitStart} setNewTaskMode={setNewTaskMode}/>
      }
    </div>
  );
}

export default App;
